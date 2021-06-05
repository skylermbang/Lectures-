from flask import Flask, render_template, request

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbprac


# GET -> 페이지 / POST(id,pw) -> 로그인
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('login.html')
    else:
        # id,pw 를 POST 의 body 에서 받습니다.
        id = request.form['id']
        pw = request.form['pw']

        # id와 pw가 둘다 일치하는 데이터를 찾습니다.
        db_id = db.users.find_one({'id': id, 'pw': pw}, {'_id': False})

        # db_id가 존재한다면
        if db_id is not None:
            return "로그인을 성공하였습니다"

        # db_id가 존재하지 않는다면
        else:
            return "아이디 또는 패스워드를 확인하세요"


# POST(id,pw) -> 회원가입
@app.route('/signup', methods=['POST'])
def signup():
    # id,pw 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    pw = request.form['pw']

    # id 가 일치하는 데이터를 찾습니다.
    db_id = db.users.find_one({'id': id}, {'_id': False})

    # id 가 일치하는 데이터가 존재한다면
    if db_id is not None:
        print("이미 존재하는 아이디입니다")

    # 아니라면 아이디를 저장합니다.
    else:
        db.users.insert_one({'id': id, 'pw': pw})
        print("회원가입이 완료되었습니다")


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
