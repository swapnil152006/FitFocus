from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.task_model import TaskModel
from datetime import datetime


@jwt_required()
def create_task():

    data = request.get_json()

    title = data.get("title")
    description = data.get("description")
    category = data.get("category")
    priority = data.get("priority")
    due_date = data.get("dueDate")

    if not title:
        return jsonify({
            "success": False,
            "message": "Title is required."
        }), 400

    user_id = get_jwt_identity()

    task = {
        "userId": user_id,
        "title": title,
        "description": description,
        "category": category,
        "priority": priority,
        "status": "Pending",
        "dueDate": due_date,
        "createdAt": datetime.utcnow(),
        "updatedAt": datetime.utcnow()
    }

    TaskModel.create_task(task)

    return jsonify({
        "success": True,
        "message": "Task created successfully."
    }), 201