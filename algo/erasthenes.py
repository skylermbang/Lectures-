import math

while True :
    n=int(input())
    if n == 0:
        break

    count = 0
    array = [True for i in range(2*n + 1)] 
    for i in range(2, int(math.sqrt(2*n)) + 1): 
        if array[i] :
            j = 2 
            while i * j <= 2*n:
                array[i * j] = False
                j += 1

    for i in range(n+1 , 2*n+1):
        if array[i]:
            count += 1
    print(count)    



