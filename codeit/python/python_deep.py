

# tuple

a_list = ['a','b','c']
a_tupe = ('a', 'b', 'c')   # cant change the order or modify

a=[1,2,2,3,5,3,2,1,13,6,7,8,3]
a_set= set(a)
print(a_set)

student_a = ['물리2','국어','수학1','음악','화학1','화학2','체육']
student_b = ['물리1','수학1','미술','화학2','체육']

a_set = set(student_a)
b_set = set(student_b)

print(a_set&b_set)
print(a_set|b_set)
print(a_set - b_set)
