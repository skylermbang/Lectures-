
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
print(a >4 or not(a<2 or a ==3 )


