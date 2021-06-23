# 11651
n = int(input())
dix = []

for i in range (n):
    dix.append(list(map(int,input().split())))
dix.sort(key=lambda x:(x[1],x[0]))
for a in dix:
    print(a[0],a[1])
