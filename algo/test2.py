

input = input()

n = int(input)
count =0
for i in range (n+1, ((2*n)+1)):
    if i > 1:
        for j in range (2,i):
            if(i%j)==0:
                print(i, "this is not prime number")
                break
                   
            else:
                print(i, "this is prime number")  
                count +=1
                break
                
    else:
        continue
print(count)   
      