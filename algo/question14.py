# 2869
import math
a,b,v = map(int, input().split())
#a=5
#b=1
#v=6
day= int(math.ceil((v-a)/(a-b)))+1
print(day)



'''
current = 0
day = 0
while current < v:
    day+=1
    current += a
    if current >= v:
        break
    else:
        current-= b
      

print(day)        
'''