from flask import Blueprint
from controllers.task_controller import create_task

task_bp = Blueprint("task", __name__)

task_bp.route(
    "",
    methods=["POST"]
)(create_task)