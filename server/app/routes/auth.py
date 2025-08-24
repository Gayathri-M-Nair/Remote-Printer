from flask import Blueprint, request, jsonify

auth = Blueprint('auth', __name__)

# Dummy login logic
@auth.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Simple mock login
    if email == "test@gmail.com" and password == "123456":
        return jsonify({"message": "Login successful", "token": "mock-token"}), 200
    else:
        return jsonify({"error": "Invalid credentials"}), 401
