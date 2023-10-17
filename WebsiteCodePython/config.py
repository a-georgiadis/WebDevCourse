import os

class Config(object):
    # Set a secret key from the configuration
    
    # This line will either take a secret key available in the environment or the hardcoded key
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'