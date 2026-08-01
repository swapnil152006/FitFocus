from flask import jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from database.mongo import mongo


@jwt_required()
def get_dashboard_summary():

    user_id = get_jwt_identity()

    print("Current User ID:", user_id)

    tasks = list(
        mongo.db.tasks.find({
            "userId": user_id
        })
    )

    print(tasks)

    return jsonify(tasks)