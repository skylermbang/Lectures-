from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.

# HTML을 주는 부분


@app.route('/')
def home():
    return render_template('index.html')

# API 역할을 하는 부분


@app.route('/orders', methods=['POST'])
def makeorder():
    name_receive = request.form['name_give']
    course_receive = request.form['course_give']
    address_receive = request.form['address_give']
    contact_receive = request.form['contact_give']

    student = {
        'student_name': name_receive,
        'course': course_receive,
        'addresss': address_receive,
        'contact': contact_receive
    }

    db.assignment3.insert_one(student)

    return jsonify({'result': 'success', 'msg': ' Order Completed'})


@app.route('/orders', methods=['GET'])
def listing():
    students = list(db.assignment3.find({}, {'_id': 0}))

    return jsonify({'result': 'success',  'allstudents': students})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
