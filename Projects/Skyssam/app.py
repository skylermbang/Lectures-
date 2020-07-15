from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
from flask import Flask, render_template, jsonify, request
app = Flask(__name__)

client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.

# HTML을 주는 부분


@app.route('/home')
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/overview')
def overview():
    return render_template('overview.html')


@app.route('/froggy')
def froggy():
    return render_template('froggy_goestoschool.html')


@app.route('/froggy2')
def froggy2():
    return render_template('froggy2_swim.html')


@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

# API 역할을 하는 부분


@app.route('/reviews', methods=['POST'])
def write_review():
    return jsonify({'result': 'success', 'msg': '이 요청은 POST!'})


@app.route('/reviews', methods=['GET'])
def read_reviews():
    return jsonify({'result': 'success', 'msg': '이 요청은 GET!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
