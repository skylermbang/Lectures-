# map, filter , lambda


people = [
    {'name': 'bob', 'age': 20},
    {'name': 'carry', 'age': 38},
    {'name': 'john', 'age': 7},
    {'name': 'smith', 'age': 17},
    {'name': 'ben', 'age': 27},
    {'name': 'bobby', 'age': 57},
    {'name': 'red', 'age': 32},
    {'name': 'queen', 'age': 25}
]

result3 = filter(lambda x: x['age'] > 20, people)

print(result3)

def check_adult(person):
    return "adult " if person['age'] >20 else "teenager"


result= map(check_adult,people)
result2= map(lambda person:("adult " if person['age'] >20 else "teenager"), people)
print(list(result2))

