#loop


randomes =["apple", "graphe" , "fuck" ,"chicken" ]
for randome in randomes:
    print(randome)




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

for person in people:
    print(person['name'] + "  "  +str(person['age']))
    name = person['name']
    age = person['age']
    if age > 20:
        print(name , age )


for i,person in enumerate(people):

    name = person['name']
    age = person['age']

    print(i,name , age )
    if i >3 :
        break

# question
num_list = [1, 2, 3, 6, 3, 2, 4, 5, 6, 2, 4]
even_list = []
def function1() :
    for i in num_list:
        if i%2 == 0:

            even_list.append(i)
    print(even_list)
function1()


def function2():
    result = len(even_list)
    print(result)

function2()

a=0
def function3():
    Sum = sum(even_list)
    print(Sum)

function3()

bigNumber = 0
def function4 ():
    for i in even_list:
        if i >bigNumber:
            bigNumber = i
    print(bigNumber)
function4()