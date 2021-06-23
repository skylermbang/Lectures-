# 9012



import sys


N = int(sys.stdin.readline().rstrip())

answer_1=[]
answer_2=[]

for i in range(N):

    #input = list(sys.stdin.readline().rstrip())
    #print(input)
    stack=[]
    input = sys.stdin.readline()
    for i in input:

        if i == '(':
            stack.append(i)
        elif i == ')':
            if stack:
                stack.pop()
            else:
                print("NO")
                break    
    else:
        if not stack:
            print("YES")
        else:
            print("NO")                


    


    '''
    if input[-1] == '(':
        print("NO 1")

    if input[-1] == ')':    
        for i in range( len(input)-1,-1,-1):
            if input[i] ==')':
                answer_2.append(input[i])
                input.pop()
                continue
            else:
                answer_1.append(input[i])    
                input.pop()
                continue

    if len(answer_1) == len(answer_2):
        print("YES")    
    else:
        #print(answer_1)
        #print(answer_2)
        print("NO")    
'''