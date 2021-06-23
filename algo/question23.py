#10773



import sys


N = int(sys.stdin.readline().rstrip())
stack=[]

for i in range(N):
    command = int(sys.stdin.readline())

    if command == 0:
        stack.pop()
    elif command >0:
        stack.append(command)

print(sum(stack))            
