
n =int(input())



if n == 1 :
    print(1)
    exit()
elif 0 :
    exit()    
elif 2:
    print(1)
    
else:

    flag = False 
    count=0
    if n > 0:
        for j in range( n, (2*n)+1):
            j=j+1
            
            if j > 1 :
                for i in range(2, j):
                    if(j%i)==0:
                        flag = True
                        break
                    
            if flag == False:
                count +=1 
            flag = False
            
        print(count)          
            