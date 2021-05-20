##  anstraction?


name = "skyler"
x = 7
x = x +1


##

def hello():
    print("hello")
    print("this is skyler")

print(" methode before")
hello()
print(" methode done ")


def square(x):
    return x * x

print (square(3) + square(4))

def square2(x):
    return x * x
    print(" this is dead code will never excuted ")


print(square2(3))

## optional parameters
## that optaoinal parameter have to be at the very end
def myself(name, age, nationality = "skyler world "):
    print ("i am {}".format(name))
    print (" i am {} years old" .format(age))
    print(" i am from {}".format(nationality))


myself("skyler", 27)


## scope

def funxtionX():
    z =3
    print(z)


funxtionX()
print(z)
