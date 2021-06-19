# 1037
x =int(input())

#a = list(map(int, input().split()))

#a= [7, 49, 343]
#a = [2, 3, 6, 9]
a= [2, 3, 6, 4, 8, 12]
#print(len(a))

if x %2 ==0:
    print(a[0]*a[-1])
elif x%2 >0:
    array_min = 0
    array_max = len(a)-1
    current = (array_min + array_max)//2
    #print(current , "index ")
    
    
    print( a[current]*a[current])

