# online


# if -one line

num = 3

if num %2==0:
   result = "even"

else:
    result ="odd"

print(f"{num} is {result}")


result2 = ("even" if num % 2 == 0 else "odd")
print(f"{num} is {result2}")

# for

a_list = [1,3,2,5,1,2]
b_list = []
for a in a_list:
    b_list.append(a * 2)
print(b_list)

c_list = [a*2 for a in a_list]
print(c_list)