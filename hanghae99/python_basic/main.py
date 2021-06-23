import requests
from bs4 import BeautifulSoup
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

headers = {'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get('https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303',headers=headers)

soup = BeautifulSoup(data.text, 'html.parser')

title = soup.select_one('#old_content > table > tbody > tr:nth-child(2) > td.title > div > a')

print(title.text) ## text
print(title['href']) ## tag의 속성을 가져온다

titles = soup.select('#old_content > table > tbody > tr')

for title in titles:

        a_tag = title.select_one('td.title > div > a')
        if a_tag is not None:
            rank = title.select_one('td:nth-child(1) > img')['alt']
            titlea= a_tag.text
            rate = title.select_one('td.point').text
            #print(rank , titlea, rate)
            doc ={
                'rank' : rank,
                'title': titlea,
                'rate': rate
            }
            #db.week3.insert_one(doc)

all = list(db.week3.find({}, {'_id': False}))  ## all the db
print(all)


matrix_score = list(db.users1.find({'title':'매트릭스'},{'_id':False}))
print(matrix_score)


