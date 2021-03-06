from flask import Flask, request
import mysql.connector
import time
import datetime
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

db = mysql.connector.connect(
    host="localhost",
    user="root",password="123Jojo.",
    database="unihack")
cursor = db.cursor()

def get_users(username):
    cursor.execute("SELECT * FROM user_info WHERE username = %s", (username,))
    users = cursor.fetchall()
    return users

@app.route('/login',methods=['GET'])
def user_login():
    """Check user's password match with username or not"""
    username = request.args.get('username')
    password = request.args.get('password')
    users = get_users(username)
    if len(users) == 0:
        return {"error":"User not found."},400
    result = []
    if users[0][2] == password:
        result.append(users[0][0])
    return {"results":result},200

@app.route('/signup',methods=['GET'])
def create_user():
    """Create user by store username and password into database"""
    username = request.args.get('username')
    password = request.args.get('password')
    users = get_users(username)
    if len(users) > 0:
        return {"error":"Username is already registered."},400
    try:
        cursor.execute("INSERT INTO user_info (username,password) VALUES (%s, %s)", (username,password))
        db.commit()
    except:
        return {"error":"Register Failed."},400
    return {"msg":"Sign up successfully!"},200


@app.route('/children/list',methods=['GET'])
def get_children_list():
    cursor.execute("SELECT * FROM children_info")
    children = cursor.fetchall()
    return {"results":children},200

@app.route('/donate',methods=['POST'])
def donate():
    children_id  = request.args.get('children_id')
    sponsor_id = request.args.get('sponsor_id')
    timestamp = datetime.datetime.now()
    donate_amount = request.args.get('amount')
    try:
        cursor.execute("INSERT INTO funding_info (children_id, sponsor_id, timestamp, amount) VALUES (%s, %s, %s, %s)", (children_id, sponsor_id, timestamp, donate_amount))
        db.commit()
    except:
        return {"error":"Donate failed."},400
    return {"msg":"Donate successfully!"},200

@app.route('/children/info',methods=['GET'])
def get_children_info():
    sponsor_id  = request.args.get('sponsor_id')
    cursor.execute("SELECT * FROM children_info WHERE id in (SELECT DISTINCT children_id FROM unihack.funding_info where sponsor_id = %s)", (sponsor_id,))
    children = cursor.fetchall()
    return {"results":children},200

@app.route('/children/update',methods=['GET'])
def get_children_update():
    sponsor_id  = request.args.get('sponsor_id')
    print(sponsor_id)
    cursor.execute("SELECT * FROM children_update as cu join children_info as ci on cu.children_id = ci.id where sponsor_id = %s", (sponsor_id,))
    children = cursor.fetchall()
    print(children)
    return {"results":children},200
