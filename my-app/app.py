from flask import Flask, request, jsonify
from models import Complaint

app = Flask(__name__)

@app.route('/submit-complaint', methods=['POST'])
def submit_complaint():
    data = request.get_json()
    complaint = Complaint(name=data['name'], email=data['email'], complaint=data['complaint'])
    complaint.save()
    return jsonify({'message': 'Complaint submitted successfully.'})

if __name__ == '__main__':
    app.run(debug=True)