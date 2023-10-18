from .extensions import socketio
from flask_socketio import emit

# Create a function to tell us when they've connected
@socketio.on("connect")
def handle_connect():
    print("Clinet connected!")


"""This Section is for the app

Keyword arguments:
argument -- description
Return: return_description
"""

# Handles the user joining the chat app we made
@socketio.on("user_join")
def handle_user_join(username):
    
    print(f'{username} joined')
    
    
@socketio.on("new_message")
def handle_new_message(message):
    print(f'{message}')
    # Emit a chat
    emit("chat_update", {"message":message}, broadcast=True)