from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.dbsparta

# insert/ find / update /delete


# insert
doc = {'name':'bobby','age':21}
doc1 = {'name':'skyler','age':29}
doc2 = {'name':'scarlett','age':26}
doc3 = {'name':'jane','age':24}
doc4 = {'name':'andy','age':24}
#db.users1.insert_one(doc)
#db.users1.insert_one(doc1)
#db.users1.insert_one(doc2)
#db.users1.insert_one(doc3)
#db.users1.insert_one(doc4)


# find
same_ages = list(db.users1.find({'age':24},{'_id':False}))
all = list(db.users1.find({},{'_id':False}))  ## all the db
bobby = list(db.users1.find({'name':'bobby'},{'_id':False}))

for person in same_ages:
    print(person)

for a in all:
    print(a)

print(bobby)

# update
db.users1.update_one({'name':'bobby'},{'$set':{'age':19}})
# delete
db.users.delete_one({'name':'bobby'})
