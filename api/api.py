from flask import Flask, request
import time
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/login',methods=['GET'])
def user_login():
    """Check user's password match with username or not"""
    username = request.args.get('username')
    password = request.args.get('password')
    users = get_users(username)
    if len(users) == 0:
        return {"error":"User not found."},400
    result = False
    if users[0][2] == password:
        result = True
    return {"results":result},200
