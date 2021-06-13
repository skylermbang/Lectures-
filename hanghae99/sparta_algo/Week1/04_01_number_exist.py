input = [3, 5, 6, 1, 2, 4]


def is_number_exist(number, array):

    for index in range(len(array)):   # input nubmer of array size N
        if number == array[index]:    # comparison operator
            return True               #  N * 1

    return False

result = is_number_exist(7, input)
print(result)
result2 = is_number_exist(4, input)
print(result2)