def move_disk(disk_num, start_peg, end_peg):
    print("%d번 원판을 %d번 기둥에서 %d번 기둥으로 이동" % (disk_num, start_peg, end_peg))

def hanoi(num_disks, start_peg, end_peg):
    # case 1 : if there is no diskc
    if num_disks ==0:
        return
    else:
        ather_peg = 6- start_peg - end_peg
        
        # except the biigest disk, move all the disk to other peg 
        hanoi(num_disks-1,start_peg,ather_peg)
        # the biiges disk goes to end peg
        move_disk(num_disks,start_peg,end_peg)
        # move those small disks to the end peg
        hanoi(num_disks-1, ather_peg, end_peg)
    # 코드를 입력하세요.

# 테스트 코드 (포함하여 제출해주세요)
hanoi(5, 1, 3)
