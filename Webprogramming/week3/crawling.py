import requests
from bs4 import BeautifulSoup

# 타겟 URL을 읽어서 HTML를 받아오고,
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36'}
data = requests.get(
    'https://movie.naver.com/movie/sdb/rank/rmovie.nhn?sel=pnt&date=20200303', headers=headers)

# HTML을 BeautifulSoup이라는 라이브러리를 활용해 검색하기 용이한 상태로 만듦
# soup이라는 변수에 "파싱 용이해진 html"이 담긴 상태가 됨
# 이제 코딩을 통해 필요한 부분을 추출하면 된다.
soup = BeautifulSoup(data.text, 'html.parser')
# title = soup.select_one(
#     '#old_content > table > tbody > tr:nth-child(2) > td.title > div > a')
# print(title)
# print(title.text)
# print(title.href)


trs = soup.select('#old_content > table > tbody > tr')

# old_content > table > tbody > tr:nth-child(2)
# print(trs)

for tr in trs:
    title = tr.select_one('td.title >div > a')
    if title != None:

       # print(title.text)
        movie = title.text
       # print(movie)

        number = tr.select_one('td:nth-child(1) > img')['alt']

     # old_content > table > tbody > tr:nth-child(2) > td:nth-child(1) > img

        # print(number)
        # old_content > table > tbody > tr:nth-child(2) > td.point

        score = tr.select_one('td.point').text
        print(number, movie, score)
