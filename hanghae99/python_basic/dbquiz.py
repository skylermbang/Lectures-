from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# 코딩 시작

movie = db.week3.find_one({'title':'매트릭스'})
matrix_rate= movie['rate']

'''
same_rate = list(db.week3.find({'rate':movie['rate']},{'_id':False}))

for rate in same_rate:
    print(rate['title'])
'''
db.week3.update_one({'title':'매트릭스'},{'$set':{'rate':'0'}})
db.week3.update_one({'title':'그린 북'},{'$set':{'rate':'0'}})
db.movie.update_one({'title':'그린 북'},{'$set':{'rate':'0'}})

print(movie)
