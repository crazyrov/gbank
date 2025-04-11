from flask import Flask, request
from flask_cors import CORS

import db_helper


app = Flask(__name__)
allowed_origins = [
    "http://localhost:4173",
    "https://gbank-frontend-15016664665.us-central1.run.app",
    "http://localhost:3000"
]

CORS(app,origins=allowed_origins)

@app.route('/')
def hello():
    print(request.form)
    return "Hello";

@app.route('/check_user')
def check_user():
    # Check if the user is in the database
    print(request.headers)
    print("Here is the token : ", request.headers.get("Authorization"))
    return db_helper.check_user(request.args.get("user"), request.headers.get("Authorization"))
    # return False


@app.route('/new_user', methods=['POST'])
def new_user():
    # Add user and details into the database
    return db_helper.add_new_user(request.get_json())
    pass

@app.route('/get_info')
def get_user_info():
    # get user account detains, profile details and statement details
    pass


if __name__ == "__main__":
    app.run(port=8080, host="0.0.0.0")