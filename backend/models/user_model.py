from database.mongo import mongo


class UserModel:

    @staticmethod
    def find_by_email(email):
        return mongo.db.users.find_one({"email": email})

    @staticmethod
    def find_by_id(user_id):
        return mongo.db.users.find_one({"_id": user_id})

    @staticmethod
    def create_user(user_data):
        return mongo.db.users.insert_one(user_data)