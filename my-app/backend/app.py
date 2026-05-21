from flask import Flask, render_template, request, redirect, url_for, jsonify, flash
from database import init_db, get_db_connection
from models import Complaint
import os

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')\n
# Initialize the database when the app starts
with app.app_context():
    init_db()


@app.route('/')
def index():
    """Render the main complaint submission and tracking page."""
    return render_template('index.html')


@app.route('/admin')
def admin():
    """Render the admin panel for managing complaints."""
    return render_template('admin.html')


# ==========================
# Complaint CRUD API Routes
# ==========================

@app.route('/api/complaints', methods=['POST'])
def create_complaint():
    """Create a new complaint (CREATE operation)."""
    data = request.get_json()

    # Server-side validation
    required_fields = ['name', 'email', 'phone', 'category', 'description']
    for field in required_fields:
        if not data.get(field) or not str(data.get(field)).strip():
            return jsonify({'error': f'{field.capitalize()} is required'}), 400

    name = data['name'].strip()
    email = data['email'].strip()
    phone = data['phone'].strip()
    category = data['category'].strip()
    description = data['description'].strip()

    if len(name) < 2 or len(name) > 100:
        return jsonify({'error': 'Name must be between 2 and 100 characters'}), 400
    if '@' not in email or '.' not in email:
        return jsonify({'error': 'Invalid email format'}), 400
    if len(phone) < 7 or len(phone) > 20:
        return jsonify({'error': 'Phone number must be between 7 and 20 characters'}), 400
    if len(description) < 10:
        return jsonify({'error': 'Description must be at least 10 characters'}), 400

    complaint_id = Complaint.create(name, email, phone, category, description)
    complaint = Complaint.get_by_id(complaint_id)

    return jsonify({
        'message': 'Complaint submitted successfully',
        'complaint': complaint
    }), 201


@app.route('/api/complaints', methods=['GET'])
def get_complaints():
    """Get all complaints (READ operation - list)."""
    complaints = Complaint.get_all()
    return jsonify({'complaints': complaints}), 200


@app.route('/api/complaints/<int:complaint_id>', methods=['GET'])
def get_complaint(complaint_id):
    """Get a single complaint by ID (READ operation - detail)."""
    complaint = Complaint.get_by_id(complaint_id)
    if not complaint:
        return jsonify({'error': 'Complaint not found'}), 404
    return jsonify({'complaint': complaint}), 200


@app.route('/api/complaints/<int:complaint_id>', methods=['PUT'])
def update_complaint(complaint_id):
    """Update complaint status and priority (UPDATE operation)."""
    data = request.get_json()
    complaint = Complaint.get_by_id(complaint_id)
    if not complaint:
        return jsonify({'error': 'Complaint not found'}), 404

    status = data.get('status', complaint['status'])
    priority = data.get('priority', complaint['priority'])

    valid_statuses = ['Pending', 'In Progress', 'Resolved', 'Closed']
    valid_priorities = ['Low', 'Medium', 'High', 'Critical']

    if status not in valid_statuses:
        return jsonify({'error': f'Invalid status. Must be one of: {valid_statuses}'}), 400
    if priority not in valid_priorities:
        return jsonify({'error': f'Invalid priority. Must be one of: {valid_priorities}'}), 400

    Complaint.update_status(complaint_id, status, priority)
    updated_complaint = Complaint.get_by_id(complaint_id)

    return jsonify({
        'message': 'Complaint updated successfully',
        'complaint': updated_complaint
    }), 200


@app.route('/api/complaints/<int:complaint_id>', methods=['DELETE'])
def delete_complaint(complaint_id):
    """Delete a complaint (DELETE operation)."""
    complaint = Complaint.get_by_id(complaint_id)
    if not complaint:
        return jsonify({'error': 'Complaint not found'}), 404

    Complaint.delete(complaint_id)
    return jsonify({'message': 'Complaint deleted successfully'}), 200


@app.route('/api/complaints/track', methods=['GET'])
def track_complaint():
    """Track a complaint by its ID (via query parameter)."""
    complaint_id = request.args.get('id')
    if not complaint_id:
        return jsonify({'error': 'Complaint ID is required'}), 400

    try:
        complaint_id = int(complaint_id)
    except ValueError:
        return jsonify({'error': 'Invalid complaint ID'}), 400

    complaint = Complaint.get_by_id(complaint_id)
    if not complaint:
        return jsonify({'error': 'Complaint not found'}), 404

    return jsonify({'complaint': complaint}), 200


@app.route('/api/stats', methods=['GET'])
def get_stats():
    """Get complaint statistics for the admin dashboard."""
    conn = get_db_connection()
    stats = {}
    for status in ['Pending', 'In Progress', 'Resolved', 'Closed']:
        row = conn.execute(
            'SELECT COUNT(*) as count FROM complaints WHERE status = ?', (status,)
        ).fetchone()
        stats[status] = row['count']

    total = conn.execute('SELECT COUNT(*) as count FROM complaints').fetchone()['count']
    stats['Total'] = total
    conn.close()
    return jsonify({'stats': stats}), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
