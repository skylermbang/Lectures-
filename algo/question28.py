# 4949 


import sys


while True:

    input = sys.stdin.readline().rstrip()
    
    if input=='.':
        break
   

    stack1=[]
    for i in input:


        if i == '(' or i == '[':
            stack1.append(i)

        elif i == ')':
            if not stack1 or stack1[-1] == '[':
                print("no") 
                break
            elif stack1[-1] =='(':
                stack1.pop()


        elif i==']':
            if not stack1 or stack1[-1]== '(':
                print("no")
                break
            elif stack1[-1] == '[':
                stack1.pop()
    else:
        if not stack1:
            print("yes")
        else:

            print("no")                





