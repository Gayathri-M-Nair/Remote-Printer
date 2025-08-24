from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    CORS(app)

    from .routes.upload import main as upload_blueprint
    from .routes.auth import auth as auth_blueprint

    app.register_blueprint(upload_blueprint)
    app.register_blueprint(auth_blueprint)

    return app
