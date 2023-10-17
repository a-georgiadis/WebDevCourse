from flask import Blueprint, render_template, request
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired

# Blueprints allow for seperation of files based on functions
auth = Blueprint('auth',__name__)

# These are decorators that wrap the function that tell flask that the function below it should be called when the route is attempted to be reached
@auth.route("/login", methods = ["GET", 'POST'])
def login():
    if request.form:
        data = request.form
        print(data)
    return render_template("login.html", form=LoginForm())

# Creation of a dictionary by making a class
class LoginForm(FlaskForm):
    username = StringField('Username', validators=[DataRequired()])
    password = PasswordField('Password', validators=[DataRequired()])
    remember_me = BooleanField('Remember Me')
    submit = SubmitField('Sign In')