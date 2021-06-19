# 2609
import sys
from math import gcd
#a, b = map(int,sys.stdin.readline().split())

a=24
b=18

def gcd(a,b):
    
    while b > 0:
        a,b = b, a%b
    return a

def lcm(a,b):
    return((a*b)//gcd(a,b))

print(gcd(a,b))
print(lcm(a,b))

'''

for i in range (min(a,b),0,-1):
    if a%i == 0 and b%i== 0:
        print(i)
        break


for i in range(max(a,b),(a*b),+1):
    if i%a ==0 and i%b ==0:
        print(i)
        break 
'''
