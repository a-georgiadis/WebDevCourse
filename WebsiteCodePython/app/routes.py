from flask import Blueprint, render_template, request, flash, jsonify

# Blueprints allow for seperation of files based on functions
routes = Blueprint('routes',__name__)

# These are decorators that wrap the function that tell flask that the function below it should be called when the route is attempted to be reached
@routes.route("/")
@routes.route("index.html")
def index():
    user = {'username':'Ageorgi2'}
    return render_template("home.html", user=user)

@routes.route("/socketio")
def socketPage():
    return render_template("socketIO.html")