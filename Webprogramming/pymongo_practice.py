from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta                      # 'dbsparta'라는 이름의 db를 만듭니다.


doc = {"name": "skyler", "age": "29"}
db.users.insert_one(doc)
# MongoDB에 insert 하기

# 'users'라는 collection에 {'name':'bobby','age':21}를 넣습니다.
db.users.insert_one({'name': 'bobby', 'age': 21})

db.users.insert_one({'name': 'kay', 'age': 27})
db.users.insert_one({'name': 'john', 'age': 30})

user = db.users.find_one({'name': 'skyler'})  # skyler 이름으로 찾아바
print(user)
user = db.users.find_one({'name': 'ah'}, {'_id': 0})  # skyler 이름으로 찾아바  id 뺴줘
print(user)

all_users = list(db.users.find({}, {'_id': 0}))  # everyone   no condition
print(all_users)
for user in all_users:
    print(user)


# change the age to 19 if the name is  bobby
# update_one 을 주로쓴다.   upate_many는 주로안써 큰일난거거든
# delete_one 도잘안쓰긴하는데...
db.users.update_one({"name": "bobby"}, {"$set": {'age': 19}})
db.users.delete_one({"name": "skyler"})  # skyler한명 지워
db.users.delete_many({"name": "skyler"})  # delete all skylesr
