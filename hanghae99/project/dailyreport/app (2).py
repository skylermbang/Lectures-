from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from collections import ChainMap

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbprac


# GET -> 페이지 / POST(id,pw) -> 로그인
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template('main.html')
    else:
        # id,pw 를 POST 의 body 에서 받습니다.
        id = request.form['id']
        pw = request.form['pw']

        # id와 pw가 둘다 일치하는 데이터를 찾습니다.
        db_id = db.users.find_one({'id': id, 'pw': pw}, {'_id': False})

        # db_id가 존재한다면
        if db_id is not None:
            return id

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
        return "이미 존재하는 아이디입니다"

    # 아니라면 아이디를 저장합니다.
    else:
        db.users.insert_one({'id': id, 'pw': pw})
        return id


# POST(id, date, hour, plan1/2/3_category, plan1/2/3_hour, plan1/2/3_description, immerse, about) -> 하루 저장
@app.route('/postdaily', methods=['POST'])
def post_daily():
    # id,year,month,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02
    hour = request.form['hour']  # ex) 0~23

    # plan1,2,3의 category, hour, description 를 POST 의 body 에서 받습니다.
    category1 = request.form['category1']
    hour1 = request.form['hour1']
    description1 = request.form['description1']

    category2 = request.form['category2']
    hour2 = request.form['hour2']
    description2 = request.form['description2']

    category3 = request.form['category3']
    hour3 = request.form['hour3']
    description3 = request.form['description3']

    # immerse(몰입도), about(비고)를 POST 의 body 에서 받습니다.
    immerse = request.form['immerse']
    about = request.form['about']

    # 해당 id,year,month,date 가 일치하는 데이터가 있는지 확인합니다.
    daily_data = db.timeTable.find_one({'id': id, 'date': date, 'hour': hour}, {'_id': False})

    # 저장된 적이 없었다면
    if daily_data is None:
        # 표에서 받은 모든 데이터를 저장합니다.
        db.timeTable.insert_one({
            'id': id,
            'date': date,  # ex) 2021-06-02
            'hour': hour,
            'did': [
                {'category': category1, 'hour': hour1, 'description': description1},
                {'category': category2, 'hour': hour2, 'description': description2},
                {'category': category3, 'hour': hour3, 'description': description3}
            ],
            'immerse': immerse,
            'about': about
        })
        return "해당 날짜의 데이터가 저장되었습니다"
    else:
        # 표에서 받은 모든 데이터를 업데이트 합니다.
        db.timeTable.update_one({
            # id,year,month,date 가 일치하는 곳에서
            'id': id,
            'date': date,  # ex) 2021-06-02
            'hour': hour,
            # 받은 자료들을 업데이트 합니다.
        }, {'$set': {
            'did': [
                {'category': category1, 'hour': hour1, 'description': description1},
                {'category': category2, 'hour': hour2, 'description': description2},
                {'category': category3, 'hour': hour3, 'description': description3}
            ],
            'immerse': immerse,
            'about': about
        }})
        return "해당 날짜의 데이터가 업데이트되었습니다"


# POST (id, date, hour) -> 해당 데이터 받기
@app.route('/getdaily', methods=['POST'])
def get_daily():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02
    hour = request.form['hour']  # ex) 0~23

    # id, date 가 일치하는 데이터를 찾습니다.
    daily_data = db.timeTable.find_one({'id': id, 'date': date, 'hour': int(hour)}, {'_id': False})
    print(daily_data)
    return jsonify(daily_data)


# POST (id, date, hour) -> 그래프 데이터 받기
@app.route('/graph', methods=['POST'])
def graph():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02

    # id, date 가 일치하는 데이터를 찾습니다.
    daily_datum = list(db.timeTable.find({'id': id, 'date': date}, {'_id': False}))
    dict_a = {}
    for daily_data in daily_datum:
        print(daily_data['hour'], daily_data['immerse'])
        dict_a[daily_data['hour']] = daily_data['immerse']
    return jsonify(dict_a)


# # 특정 날짜의 모든 데이터를 받습니다.
# @app.route('/piechart', methods=['POST'])
# def get_daily_piechart():
#     # id,date 를 POST 의 body 에서 받습니다.
#     id = request.form['id']
#     date = request.form['date']  # ex) 2021-06-02
#
#     # id, date 가 일치하는 데이터를 찾습니다.
#     day_data = list(db.timeTable.find(
#         {'id': id, 'date': date},
#         {
#             '_id': False,
#             'id': False,
#             'date': False,
#             'hour': False,
#             'plan1_description': False,
#             'plan2_description': False,
#             'plan3_description': False,
#             'immerse': False,
#             'about': False
#         }))
#     print(day_data)
#     # plan1_category plan1_hour plan2_category plan2_hour plan3_category plan3_hour
#     # 수면 휴식 정비 식사 간식 업무 강의 운전 독서 공부 운동 여가 폰질 기타
#     avr_arr = []
#     for x in day_data:
#         print(x)
#
#     return jsonify(daily_data)


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
