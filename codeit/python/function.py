#fucntion

def function():
    print("yo")



function()


def sum (a, b):
    print ( a+b)

sum(2,5)

def bus_rate(age):
    if age >65:
        print( "free")
        return 0
    elif age >20:
        print("its an adult")
        return 10000
    else:
        print("hmm")
        return 2000

myrate1 = bus_rate(15)
myrate2 =bus_rate(35)

print(myrate1)
print(myrate2)






                                                         
def gender(num):
     sex= num.split("-")[1] [0:1]
     if sex == 1:
         return "male"
     elif sex == 2:
         return "female"
     else :
         return "fucking ailen"

    

gender1=gender("910618-515555")
print(gender1)


