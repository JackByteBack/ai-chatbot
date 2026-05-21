import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), 'complaints.db')


def get_db_connection():
    """Create and return a database connection with Row factory.

    Returns:
        sqlite3.Connection: A connection object to the SQLite database
    """
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initialize the database schema.

    Creates the complaints table if it does not already exist.
    The table stores:
        - id: Primary key (auto-incremented)
        - name: Complainant's full name
        - email: Complainant's email address
        - phone: Complainant's phone number
        - category: Type/category of the complaint
        - description: Detailed description of the complaint
        - status: Current status (Pending, In Progress, Resolved, Closed)
        - priority: Priority level (Low, Medium, High, Critical)
        - created_at: Timestamp when the complaint was created
        - updated_at: Timestamp when the complaint was last updated
    """
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS complaints (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            phone TEXT NOT NULL,
            category TEXT NOT NULL,
            description TEXT NOT NULL,
            status TEXT NOT NULL DEFAULT 'Pending',
            priority TEXT NOT NULL DEFAULT 'Medium',
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()
    print(f"Database initialized at: {DB_PATH}")
