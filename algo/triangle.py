
def triangle_number(n):
    #base
    if n <2:
        return 1
    #recursive    
    return n + triangle_number(n-1) 


for i  in range (1, 20):
    print(triangle_number(i))