input = [0, 3, 5, 6, 1, 2, 4]


def find_max_plus_or_multiply(array):
    sum = 0
    for item in array :
        if item <= 1 or sum <= 1:
            sum += item
        else:
            sum *= item

    return sum


result1 = find_max_plus_or_multiply(input)
print(result1)