import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.

db = client.musics


headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(
    'https://www.genie.co.kr/chart/top200?ditc=D&ymd=20200403&hh=23&rtm=N&pg=1', headers=headers)


soup = BeautifulSoup(data.text, 'html.parser')

# select를 이용해서, tr들을 불러오기
trs = soup.select(
    '#body-content > div.newest-list > div > table > tbody > tr')

# movies (tr들) 의 반복문을 돌리기
# for tr in trs

# tr = trs[0]
# rank = tr.select_one('td.number').text[0:1]
# print(rank)

# title = tr.select_one(' td.info > a.title.ellipsis').text.strip()
# print(title)

# artist = tr.select_one('td.info > a.artist.ellipsis').text
# print(artist)

for tr in trs:
    rank = tr.select_one('td.number').text[0:2]
    title = tr.select_one(' td.info > a.title.ellipsis').text.strip()
    artist = tr.select_one('td.info > a.artist.ellipsis').text
    print(rank, title, artist)

    doc = {
        'rank': rank,
        'title': title,
        'artist': artist
    }
    db.musics.insert_one(doc)
