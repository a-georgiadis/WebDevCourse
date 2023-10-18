from flask import Flask
from config import Config

import time

from .events import socketio

def create_app():
    app = Flask(__name__)
    # Import the configuration variables dictionary by importing an object which is essentially a dictionary in another file
    app.config.from_object(Config)
    app.config['DEBUG'] = True
    
    
    # Import the blueprint from the lower level
    from .routes import routes
    from .auth import auth
    
    app.register_blueprint(routes, url_prefix='/')
    app.register_blueprint(auth, url_prefix='/')
    
    # Initialize Socket for use with the app
    socketio.init_app(app)
    
    return app