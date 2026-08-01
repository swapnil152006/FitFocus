from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager

from config import Config
from database.mongo import mongo
from routes.auth_routes import auth_bp
from routes.dashboard_routes import dashboard_bp
from routes.task_routes import task_bp

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

mongo.init_app(app)
jwt = JWTManager(app)
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(dashboard_bp, url_prefix="/api/dashboard")
app.register_blueprint(task_bp, url_prefix="/api/tasks")

@app.route("/")
def home():
    return {
        "message": "FitFocus Backend Running 🚀"
    }

if __name__ == "__main__":
    app.run(debug=True)



