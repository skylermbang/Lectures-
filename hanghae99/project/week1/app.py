from flask import Flask, render_template, request
from pymongo import MongoClient


app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/Login')
def login():
    return render_template('Login.html')

if __name__ == '__main__':
   app.run('0.0.0.0',port=5000,debug=True)

