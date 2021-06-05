first_name= "skyler"
last_name = "bang"

print (first_name+ "_" + last_name)

bb = '2'
cc = str(2)

print ( bb + cc)

text = 'abcdefg'
result1233  =  text[4:6]
print (result1233)

year = 2021
month = 6
day = 18

print (" today is " +  str(day) + " , " + str(month) + " , " + str(year) + ".")
print( " today is {},{},{}" .format(day,month,year))

dayString = "today is {},{},{}"
print(dayString .format(day,month, year))


print( "i like {}, {},{} " .format("GTR", "Supur","NSX"))
print( "i like {2}, {1},{0} " .format("GTR", "Supur","NSX"))


print("{0} divided by {1} is {2:.4f} " .format(10,3, 10/3))

# boolean
## AND
print(True and True)
print(True and False)
print(False and True)
print(False and False)
## OR
print(True or True)
print(True or False)
print(False or True)
print(False or False)

## Quiz
print("#####")

print(2>1 and "Hello" == "Hello")
print(7 == 7  or (4<3 and 12>10))

a = 3
print(a >4 or not(a<2 or a ==3 ))


myemail = "bang618@hotmail.com"
result1 = myemail.split("@")
print(result1)


text = "sparta"
result11 = text[:3]
print(result11)


phone = "031-123-123"
result13 = phone.split("-")[0]
print(result13)