from flask import Flask, render_template, request, jsonify
import json

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client.dbprac


# additional functions
def to_int_else_0(v):
    try:
        int(v)
        return int(v)
    except ValueError:
        return 0


# GET -> 메인 페이지
@app.route('/', methods=['GET'])
def main():
    if request.method == 'GET':
        return render_template('index.html')


# POST(id,pw) -> 로그인
@app.route('/login', methods=['POST'])
def login():
    # id,pw 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    pw = request.form['pw']

    # id와 pw가 둘다 일치하는 데이터를 찾습니다.
    db_id = db.users.find_one({'id': id, 'pw': pw}, {'_id': False})

    # db_id가 존재한다면
    if db_id is not None:
        return {'res': True, 'msg': "로그인되었습니다", 'id': id}

    # db_id가 존재하지 않는다면
    else:
        return {'res': False, 'msg': "아이디 또는 패스워드를 확인하세요"}


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
        return {'res': False, 'msg': "이미 존재하는 아이디입니다"}

    # 아니라면 아이디를 저장합니다.
    else:
        db.users.insert_one({'id': id, 'pw': pw})
        return {'res': True, 'msg': "회원가입이 완료되었습니다", 'id': id}


# POST(id, date, did[
# {time_name:0,time_did: [{do:'',long:'',desk:''},{do:'',long:'',desk:''},{do:'',long:'',desk:''}] ,time_score : '', time_comment : ''}
# {time_name:1,time_did: [{do:'',long:'',desk:''},{do:'',long:'',desk:''},{do:'',long:'',desk:''}] ,time_score : '', time_comment : ''}
# {time_name:2,time_did: [{do:'',long:'',desk:''},{do:'',long:'',desk:''},{do:'',long:'',desk:''}] ,time_score : '', time_comment : ''}
@app.route('/postdaily', methods=['POST'])
def post_daily():
    # id,year,month,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02
    did = json.loads(
        request.form['did'])  # [{time_name: 0,time_did: [do:'',long:'',desk:''],time_score: '',time_comment: ''},]

    time_data = db.timeTable.find_one({'id': id, 'date': date}, {'_id': False})
    # 저장된 적이 없었다면
    if time_data is None:
        db.timeTable.insert_one({'id': id, 'date': date, 'did': did})
        return {'res': True, 'msg': "해당 날짜의 데이터가 저장되었습니다"}
    # 저장된 적이 있다면
    else:
        db.timeTable.update_one({'id': id, 'date': date}, {'$set': {'did': did}})
        return {'res': True, 'msg': "해당 날짜의 데이터가 업데이트 되었습니다"}


# POST (id, date) -> 규원님의 카톡 계획2 txt
@app.route('/getdaily', methods=['POST'])
def get_daily():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02

    # id, date 가 일치하는 데이터를 찾습니다.
    daily_data = db.timeTable.find_one({'id': id, 'date': date}, {'_id': False})
    return jsonify({'res': True, 'msg': "해당 날짜의 데이터를 받았습니다.", 'val': daily_data})


# POST (id, date) -> 라인그래프에 쓸 시간별 몰입도 데이터 받기
@app.route('/graph', methods=['POST'])
def graph():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02

    # id, date 가 일치하는 데이터를 찾습니다.
    daily_data = db.timeTable.find_one({'id': id, 'date': date}, {'_id': False})['did']
    dict_a = {}
    for time_data in daily_data:
        dict_a[time_data['time_name']] = time_data['time_score']
    print(dict_a)
    return jsonify(dict_a)


# dailyreport 와 piechart에 모두 사용됩니다.
# 수면/휴식/정비/식사/간식/업무/강의/운전/독서/공부/운동/여가/폰질/기타
# POST(id, date) -> {
# "강의": 1,"공부": 4,"기타": 8,"수면": 6,"업무": 2,"여가": 2,
# "category_sum": {"기타": 10,"업무": 3,"자기계발": 4,"휴식": 6}
# }
@app.route('/piechart', methods=['POST'])
def piechart():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02

    # id, date 가 일치하는 데이터를 찾습니다.
    day_data = db.timeTable.find_one(
        {'id': id, 'date': date},
        {
            '_id': False,
            'id': False,
            'date': False,
        })

    # sum_time 에 카테고리마다 할당된 시간을 합산합니다.
    sum_time = {}
    # 해당 날짜의 모든 did 중
    for did in day_data['did']:
        for time_did in did['time_did']:
            # sum_time에 이미 해당 카테고리가 존재한다면
            if time_did['do'] in sum_time:
                # sum_time에 더합니다.
                sum_time[time_did['do']] += to_int_else_0(time_did['long'])
            #
            else:
                # sum_time에 지정합니다.
                sum_time[time_did['do']] = to_int_else_0(time_did['long'])

    # dailyreport를 위한 기능
    rest = ['수면', '휴식', '정비', '식사', '간식']
    work = ['업무', '강의', '운전']
    development = ['독서', '공부', '운동']
    etc = ['여가', '폰질', '기타']

    sum_time['category_sum'] = {'휴식': 0, '업무': 0, '자기계발': 0, '기타': 0}

    for keyName in sum_time:
        # 휴식, 업무, 자기개발, 기타 카테고리 안에 떨어질 경우
        # 해당 카테고리에 값을 추가합니다.
        if keyName in rest:
            sum_time['category_sum']['휴식'] += to_int_else_0(sum_time[keyName])
        if keyName in work:
            sum_time['category_sum']['업무'] += to_int_else_0(sum_time[keyName])
        if keyName in development:
            sum_time['category_sum']['자기계발'] += to_int_else_0(sum_time[keyName])
        if keyName in etc:
            sum_time['category_sum']['기타'] += to_int_else_0(sum_time[keyName])

    return jsonify({'res': True, 'msg': "dailyreport/piechart 데이터를 받았습니다", 'val': sum_time})


# POST (id, date) -> { "avg_immerse": 4.0 }
@app.route('/avgimmerse', methods=['POST'])
def avgimmerse():
    # id,date 를 POST 의 body 에서 받습니다.
    id = request.form['id']
    date = request.form['date']  # ex) 2021-06-02

    # id, date 가 일치하는 모든 날짜의 immerse를 찾습니다.
    daily_data = db.timeTable.find_one(
        {'id': id, 'date': date},
        {'_id': False, 'id': False, 'date': False}
    )
    # 평균 몰입도
    avg_immerse = 0
    # 모든 데이터에서 immerse 값을 더합니다.
    for did in daily_data['did']:
        avg_immerse += float(did['time_score'])

    # 그 값을 총 데이터의 수로 나눕니다.
    if len(daily_data) != 0:
        avg_immerse = avg_immerse / len(daily_data['did'])

    return jsonify({'res': True, 'msg': "평균 몰입도를 받았습니다", 'val': avg_immerse})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
