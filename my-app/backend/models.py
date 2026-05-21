from database import get_db_connection
from datetime import datetime


class Complaint:
    """Model class for Complaint CRUD operations."""

    @staticmethod
    def create(name, email, phone, category, description):
        """CREATE: Insert a new complaint into the database.

        Args:
            name (str): Full name of the complainant
            email (str): Email address
            phone (str): Phone number
            category (str): Category of the complaint
            description (str): Detailed description of the complaint

        Returns:
            int: The ID of the newly created complaint
        """
        conn = get_db_connection()
        cursor = conn.execute(
            '''INSERT INTO complaints (name, email, phone, category, description, status, priority, created_at, updated_at)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (name, email, phone, category, description, 'Pending', 'Medium',
             datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
             datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        conn.commit()
        complaint_id = cursor.lastrowid
        conn.close()
        return complaint_id

    @staticmethod
    def get_all():
        """READ: Retrieve all complaints from the database.

        Returns:
            list: A list of complaint dictionaries
        """
        conn = get_db_connection()
        complaints = conn.execute(
            'SELECT * FROM complaints ORDER BY created_at DESC'
        ).fetchall()
        conn.close()
        return [dict(row) for row in complaints]

    @staticmethod
    def get_by_id(complaint_id):
        """READ: Retrieve a single complaint by its ID.

        Args:
            complaint_id (int): The ID of the complaint to retrieve

        Returns:
            dict or None: The complaint as a dictionary, or None if not found
        """
        conn = get_db_connection()
        complaint = conn.execute(
            'SELECT * FROM complaints WHERE id = ?', (complaint_id,)
        ).fetchone()
        conn.close()
        return dict(complaint) if complaint else None

    @staticmethod
    def update_status(complaint_id, status, priority):
        """UPDATE: Modify the status and priority of an existing complaint.

        Args:
            complaint_id (int): The ID of the complaint to update
            status (str): The new status value
            priority (str): The new priority value
        """
        conn = get_db_connection()
        conn.execute(
            '''UPDATE complaints 
               SET status = ?, priority = ?, updated_at = ? 
               WHERE id = ?''',
            (status, priority, datetime.now().strftime('%Y-%m-%d %H:%M:%S'), complaint_id)
        )
        conn.commit()
        conn.close()

    @staticmethod
    def delete(complaint_id):
        """DELETE: Remove a complaint from the database.

        Args:
            complaint_id (int): The ID of the complaint to delete
        """
        conn = get_db_connection()
        conn.execute('DELETE FROM complaints WHERE id = ?', (complaint_id,))
        conn.commit()
        conn.close()
