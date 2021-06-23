
# adding all the digits
def sum_digit(n):
    if n < 10:
        return n

    return n%10 + sum_digit(n//10)    


print(sum_digits(22541))
print(sum_digits(92130))
print(sum_digits(12634))   