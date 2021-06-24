#1934
import sys


n = int(sys.stdin.readline())

def gcd(a,b):
    while b>0:
        a,b = b, a%b
    return a 

def lsm(a,b):
    return((a*b)//gcd(a,b))     
#print(a,b)

for i in range(n):
    a,b= map(int, sys.stdin.readline().split())
    
    print(lsm(a,b))






