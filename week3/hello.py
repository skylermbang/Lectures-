# 변수 , 자료형 ,함수 ,조건문 ,반복문
# 직관적인 프로그래밍 언어

print("hello sparta")

a = 2
print(a+3)

b = 3

print(a+b)


first_name = "skyler"
last_name = "bang"

print(first_name+last_name)


# print(first_name+2)  => not working becaue 2 is not srt


print(first_name + "2")   # so you have to use this


a_list = ['apple', 'banana', 'pears']  # 자료형ㄴ
a_list.append('watermelon')  # list 에 추가하는건데 () 이거 잘봐야돼 [ ]이거아닌다.
print(a_list)

a_dict = {'name': 'skyler,', 'status': 'handsome'}
# how to add in dictionary make sure you know  a_dict[ ]= xx
a_dict['weigh'] = '79kg'
print(a_dict)

# 함수


def sum(a, b):
    return a+b


result = sum(2, 3)
print(result)


def is_adult(age):
    if(age > 20):
        print("is adults")
    else:
        print("is an asshole")


is_adult(17)

# or  and   !=


def is_adult2(age, sex):
    if(age > 20 and sex == "male"):
        print("is male adult")
    elif(age > 20 and sex == "female"):
        print("is female adult")
    else:
        print("just piece of shits")


is_adult2(17, "male")
is_adult2(25, "male")


# 반복문 loop
# pyhon 의 반복문은 리스트와 함께하지

fruits = ['apple', 'pears', 'grape',
          'watermelon', 'skyler', 'scarlett', "apple"]

for a in fruits:
    print(a)

# how to count the thingy in the list


def count_fruit(name):
    count = 0
    for fruit in fruits:
        if (fruit == name):
            count += 1
    return count


result = count_fruit("apple")

print(result)
#########


people = [{'name': 'bob', 'age': 20},
          {'name': 'carry', 'age': 38},
          {'name': 'john', 'age': 7},
          {'name': 'skyler', 'age': 12}]

for person in people:
    if (person['age'] < 20):
        print(person['name'])
