from flask import Flask,render_template,redirect,session,request
import pymongo
from functools import wraps

app = Flask(__name__)

app.secret_key = b'\xc2n\xc6\xd4*\x1f\x83\xf1\xbc\n\xdb\x97\xe0\x8f\xb3\x0b'

# Database
client = pymongo.MongoClient('localhost', 27017)
db = client.user_login_system

#Decorator 
# Decorators
def login_required(f):
  @wraps(f)
  def wrap(*args, **kwargs):
    if 'logged_in' in session:
      return f(*args, **kwargs)
    else:
      return redirect('/')
  
  return wrap


#routes 
from user import routes 

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/dashboard/')
@login_required
def dashboard():
    return render_template('dashboard.html')

@app.route('/get/')
@login_required
def get_bot_response():
    text = request.args.get("msg")
    return str(text)
      