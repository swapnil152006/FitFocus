from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config
from database.mongo import mongo
from routes.auth_routes import auth_bp

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

mongo.init_app(app)
jwt = JWTManager(app)
app.register_blueprint(auth_bp, url_prefix="/api/auth")

@app.route("/")
def home():

    mongo.db.test.insert_one({
        "status": "connected"
    })

    return {
        "message": "MongoDB Connected Successfully"
    }

if __name__ == "__main__":
    app.run(debug=True)



