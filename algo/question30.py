# 1021

import sys
from collections import deque

#n = int(sys.stdin.readline())


n,m = map(int, input().split())
idx = list(map(int, input().split()))

q = deque([])
for i in range (1, n+1):
    q.append(i)

#print(q)
count =0
def one():
    q.popleft()

def two():
    global count
    count +=1
    q.append(q.popleft())

    #print(q)

def three():
    global count
    count +=1
    q.insert(0, q.pop())
    #print(q)



for target in idx:
    plus_index = q.index(target)
    minus_index = len(q) - plus_index
    mina = min(plus_index, minus_index)
    # this is the most important part.
    # to check weather it shuold go right or left
    if target == q[0]:
        one()

    if mina == plus_index:
        direction = 'plus'
        for _ in range(mina):
            two()
            if target == q[0]:
                one()

    else:
        direction = 'minus'
        for _ in range(mina):
            three()
            if target == q[0]:
                one()

          

print(count)


'''
while idx:
    if idx[0] == q[0]:
        q.pop(0)
        idx.pop(0)
        break

    else:
'''


'''

for i in range(n):

    s = sys.stdin.readline().split()

    if s[0] == 'push':
        q.append(s[1])
    elif s[0] == 'pop':
        if q:
            print(q.popleft())
        else:
            print(-1)
    elif s[0] =='size':
        print(len(q))            
    elif s[0]== 'empty':
        if q:
            print(0)
        else:
            print(1)        
    elif s[0] == 'front':
        if not q:
            print(-1)
        else:
            print(q[0])
    elif s[0] == 'back':
        if not q:
            print(-1)
        else:
            print(q[-1])     
'''      