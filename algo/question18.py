import math
#a, n = map(int, input().split())

a= 1
n= 20
array = [True for i in range(1000001)]
array[0] = False
array[1] = False

for  i in range (2, int(math.sqrt(1000001))+1):

    if array[i] is True:
        j = 2
        while i*j <= n:
            array[i*j] = False
            j += 1


for i in range (a, n+1):
    if array[i] is True:
        print(i)