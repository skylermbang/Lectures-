from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.

doc = {"name": "bob", "age": 99}

db.users.insert_one(doc)

user = db.users.find_one({"name": "bob"}, {'_id': 0})
print(user)

all_users = list(db.users.find({}, {'_id': 0}))
print(all_users)  # 리스트안에 나옴

for user in all_users:
    print(user)
# chaning the value in the db
# db.people.update_many(찾을조건,{ '$set': 어떻게바꿀지 })

db.users.update_one({'name': 'bobby'}, {'$set': {'age': 19}})
db.users.update_many({'name': 'bobby'}, {'$set': {'age': 17}})
