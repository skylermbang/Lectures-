# code it  gangnam.py 

water = 0
def trapping_rain(buildings):
    if len(buildings) > 1:    
        for i in range(len(buildings)):
            if buildings[i] > 0:
                left = i
                break
                
        for j in range(len(buildings)):
            if buildings[j] > buildings[i]:
                right = j
                break
            
        print(i,j)
        k=min(buildings[i],buildings[j])
        print(k, "the limit")
        
        for x in range(i, j):
            if buildings[x] < k:
                print("hi the index is " , x)
                global water
                water = water + (k - buildings[x])
                print(water, "water is ")
        
        del buildings[:j]
        print(buildings)    
        return trapping_rain(buildings)
        
    elif not buildings:
        #print("list empty")
        return water
        
    #elif buildings[0] == buildings[-1]:
    #    print("fuck")
  

#print(trapping_rain([3, 0, 0, 2, 0, 4]))
print(trapping_rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))


'''
def trapping_rain(buildings):
    # 코드를 작성하세요
    total_water = 0
    
    
    for i in range( 1, len(buildings)-1):
        max_left = max(buildings[:i])
        max_right = max(buildings[i:])
        
        upper = min(max_left, max_right)
        
        if buildings[i] > upper :
            total_water += 0
        else:    
            total_water = total_water +(upper- buildings[i])
        
        
    return total_water
print(trapping_rain([3, 0, 0, 2, 0, 4]))
print(trapping_rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
'''