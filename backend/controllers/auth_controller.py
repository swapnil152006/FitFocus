from flask import request, jsonify
from models.user_model import UserModel
import bcrypt
from flask_jwt_extended import create_access_token
import bcrypt


def register():

    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({
            "success": False,
            "message": "All fields are required."
        }), 400

    existing_user = UserModel.find_by_email(email)

    if existing_user:
        return jsonify({
            "success": False,
            "message": "Email already exists."
        }), 409

    hashed_password = bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    UserModel.create_user({
        "name": name,
        "email": email,
        "password": hashed_password
    })

    return jsonify({
        "success": True,
        "message": "User registered successfully."
    }), 201

def login():

    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "success": False,
            "message": "Email and password are required."
        }), 400

    user = UserModel.find_by_email(email)

    if not user:
        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    if not bcrypt.checkpw(
        password.encode("utf-8"),
        user["password"].encode("utf-8")
    ):
        return jsonify({
            "success": False,
            "message": "Invalid email or password."
        }), 401

    access_token = create_access_token(identity=str(user["_id"]))

    return jsonify({
        "success": True,
        "message": "Login successful.",
        "token": access_token,
        "user": {
            "id": str(user["_id"]),
            "name": user["name"],
            "email": user["email"]
        }
    }), 200