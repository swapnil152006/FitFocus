from flask import Blueprint
from controllers.dashboard_controller import get_dashboard_summary

dashboard_bp = Blueprint("dashboard", __name__)

dashboard_bp.route(
    "/summary",
    methods=["GET"]
)(get_dashboard_summary)