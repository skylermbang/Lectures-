# list and dictionary

#list : order matter
#dictionary : key :value ;


a_list = ["apple" , "banana", "grape", [1,2,3] ]
print (a_list)
print (a_list[3][0])

b_list = [3,4,22,11 ]
b_list.append(99)
print(b_list[4])

result2 = len(b_list)
print(result2)

b_list.sort()
print(b_list)
b_list.sort(reverse=True)
print(b_list)

result = (5 in b_list)
print(result)


#dic

a_dict = {'name' : "skyler", 'age' : 30, 'friend' : ['minky', 'tao']}
print(a_dict['friend'][0])
print('height' in a_dict)
print('age' in a_dict)
a_dict["height"] = 188
print(a_dict)
print('height' in a_dict)


people = [{'name': 'bob' , 'age': 25},
          {'name': 'anie' , 'age': 19}]
print (people) # list but two dictionaires

print(people[0]['name'])


# quiz
people = [
    {'name': 'bob', 'age': 20, 'score':{'math':90,'science':70}},
    {'name': 'carry', 'age': 38, 'score':{'math':40,'science':72}},
    {'name': 'smith', 'age': 28, 'score':{'math':80,'science':90}},
    {'name': 'john', 'age': 34, 'score':{'math':75,'science':100}}
]

# smith's science
print(people[2]['score']['science'])