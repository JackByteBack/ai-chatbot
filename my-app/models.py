from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Complaint(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    complaint = db.Column(db.Text, nullable=False)

    def __init__(self, name, email, complaint):
        self.name = name
        self.email = email
        self.complaint = complaint

    def save(self):
        db.session.add(self)
        db.session.commit()