array_a = [1, 2, 3, 5]
array_b = [4, 6, 7, 8]

array = [1,4,6,8,0,2,5,9]

def merge_sort(array):
    if len(array) <= 1:
        return array
    mid =  len(array)//2  # mid point
    left_array = merge_sort(array[:mid])
    right_array = merge_sort(array[mid:])
    print(array)
    print("left array", left_array)
    print("right array",right_array)
    return merge(left_array, right_array)



def merge(array1, array2):
    array_c = []

    array1_index= 0
    array2_index=0

    while array1_index < len(array1)  and array2_index < len(array2):
        if array1[array1_index] < array2[array2_index]:
            array_c.append(array1[array1_index])
            array1_index +=1

        else:
            array_c.append(array2[array2_index])
            array2_index +=1
    if array1_index == len(array1):
        while array2_index < len(array2):
            array_c.append(array2[array2_index])
            array2_index +=1

    if array2_index == len(array2):
        while array1_index < len(array1):
            array_c.append(array1[array1_index])
            array1_index += 1
    return array_c


print(merge(array_a, array_b))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!
print(merge_sort(array))  # [1, 2, 3, 4, 5, 6, 7, 8] 가 되어야 합니다!