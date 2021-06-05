# array max

a_list = [0,4,2,6,7,3,11]
max = 0;

for a in a_list:
    if a > max:
        max = a
print(max)



# sequential search
find = 7
pose =0
for a in a_list:
    if find == a:
        print("found" + str(pose))
    else:
        pose = pose +1
    print("not found")
