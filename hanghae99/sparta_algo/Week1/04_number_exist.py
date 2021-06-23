input = [3, 5, 6, 1, 2, 4]


def is_number_exist(number, array):

    for index in range(len(array)):
        if number == array[index]:

            print("${number} is at index {index} ")
            break

    print(f"this array dosent have {number}")


result = is_number_exist(7, input)
print(result)
result2 = is_number_exist(4, input)
print(result2)