from flask import Flask, render_template, request, jsonify, redirect, url_for
from pymongo import MongoClient
import requests


app = Flask(__name__)

client = MongoClient('192.168.35.17', 27017, username='test', password='test')
db = client.dbsparta_plus_week2


@app.route('/')
def main():
    # DB에서 저장된 단어 찾아서 HTML에 나타내기
    return render_template("index.html")


@app.route('/detail/<keyword>')
def detail(keyword):
    # API에서 단어 뜻 찾아서 결과 보내기
    r = requests.get(f"https://owlbot.info/api/v4/dictionary/{keyword}", headers={"Authorization": "Token  c7e433d6b1e151661f35e6260ea0d043f8b60da6"})
    result = r.json()
    print(result)
    return render_template("detail.html", word=keyword , result= result)


@app.route('/api/save_word', methods=['POST'])
def save_word():
    # 단어 저장하기
    return jsonify({'result': 'success', 'msg': '단어 저장'})


@app.route('/api/delete_word', methods=['POST'])
def delete_word():
    # 단어 삭제하기
    return jsonify({'result': 'success', 'msg': '단어 삭제'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)