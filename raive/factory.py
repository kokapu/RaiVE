import os
import logging
import uuid

from flask import Flask, render_template, request, session, jsonify
from flask_cors import CORS
from datetime import timedelta

from raive.model import GeminiPro25 as Model


def create_app():
    """
    Creates and configures the Flask application.

    Returns:
        Flask: The configured Flask application instance.
    """
    APP_DIR = os.path.abspath(os.path.dirname(__file__))
    STATIC_FOLDER = os.path.join(APP_DIR, "static")
    TEMPLATE_FOLDER = os.path.join(APP_DIR, "templates")

    logging.basicConfig(level=logging.DEBUG)

    app = Flask(
        __name__,
        static_folder=STATIC_FOLDER,
        template_folder=TEMPLATE_FOLDER,
    )

    app.secret_key = os.environ.get("FLASK_SECRET_KEY", "dev-secret-key")
    app.permanent_session_lifetime = timedelta(hours=1)
    CORS(app)

    @app.before_request
    def ensure_session_keys():
        session.setdefault("user_id", str(uuid.uuid4()))
        session.setdefault("authorized", False)
        session.setdefault("client_id", None)
        session.setdefault("client_secret", None)
        session.setdefault("go_id", None)
        session.setdefault("test_mode", None)

    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_index(path):
        return render_template("index.html")

    @app.route("/api/engine", methods=["POST"])
    def update_sound():
        prompt = request.json["prompt"]
        current_code = request.json["currentText"]

        model = Model()  # instantiate per request, uses session inside
        code = model.get_code(prompt, current_code)

        response = {
            "prompt": prompt,
            "code": code,
        }
        return jsonify({"response": response}), 200

    return app
