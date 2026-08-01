from database.mongo import mongo
from datetime import datetime


class TaskModel:

    @staticmethod
    def create_task(task_data):
        return mongo.db.tasks.insert_one(task_data)

    @staticmethod
    def get_tasks_by_user(user_id):
        return list(
            mongo.db.tasks.find(
                {"userId": user_id}
            ).sort("createdAt", -1)
        )

    @staticmethod
    def get_task_by_id(task_id):
        return mongo.db.tasks.find_one({
            "_id": task_id
        })

    @staticmethod
    def update_task(task_id, data):
        return mongo.db.tasks.update_one(
            {"_id": task_id},
            {"$set": data}
        )

    @staticmethod
    def delete_task(task_id):
        return mongo.db.tasks.delete_one({
            "_id": task_id
        })