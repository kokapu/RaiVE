import os
import logging

from flask import Flask, render_template
from flask_cors import CORS


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
    CORS(app)

    # Routes for HTML pages
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve_index(path):
        return render_template("index.html")

    return app
