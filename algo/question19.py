#11729

n =int(input())

history=[]


def move_disk(disk_num, start_peg, end_peg):
    # put it in the list
    
    history.append([start_peg,end_peg])


def hanoi(num_disks, start_peg, end_peg):
    # case 1 : if there is no diskc
    if num_disks ==0:
        return history
    else:
        ather_peg = 6- start_peg - end_peg
        
        # except the biigest disk, move all the disk to other peg 
        hanoi(num_disks-1,start_peg,ather_peg)
        # the biiges disk goes to end peg
        move_disk(num_disks,start_peg,end_peg)
        # move those small disks to the end peg
        hanoi(num_disks-1, ather_peg, end_peg)




hanoi(n, 1, 3)
print(len(history))
for i in range (len(history)):
    print(history[i][0], history[i][1])