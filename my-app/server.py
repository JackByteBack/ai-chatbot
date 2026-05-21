from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs
import json
import sqlite3

class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/pet-listings':
            conn = sqlite3.connect('pet_database.db')
            cursor = conn.cursor()
            cursor.execute('SELECT * FROM pets')
            pets = cursor.fetchall()
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps(pets).encode())
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Not Found')

    def do_POST(self):
        if self.path == '/submit':
            content_length = int(self.headers['Content-Length'])
            body = self.rfile.read(content_length)
            form_data = parse_qs(body.decode())
            conn = sqlite3.connect('pet_database.db')
            cursor = conn.cursor()
            cursor.execute('INSERT INTO adoption_requests (name, email, phone, pet_name) VALUES (?, ?, ?, ?)',
                           (form_data['name'][0], form_data['email'][0], form_data['phone'][0], form_data['pet-name'][0]))
            conn.commit()
            conn.close()
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'message': 'Adoption request submitted successfully'}).encode())
        else:
            self.send_response(404)
            self.send_header('Content-type', 'text/plain')
            self.end_headers()
            self.wfile.write(b'Not Found')

def run(server_class=HTTPServer, handler_class=RequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    print('Starting httpd...
')
    httpd.serve_forever()

run()
