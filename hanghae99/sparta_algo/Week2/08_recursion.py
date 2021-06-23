## make sure when you dealing with recursion, know when to exit

def count_down(number):
    if number <0:
        return

    print(number)          # number를 출력하고
    count_down(number - 1) # count_down 함수를 number - 1 인자를 주고 다시 호출한다!


count_down(60)
print("####################################")
## factorial questions
## the most common recursion questions

def factorial(n):

    if n == 1:
        return 1
    return n * factorial( n- 1)


print(factorial(5))
print("####################################")


## 회문 ?
## palindrome

input = "abcba"
input2 = "토마토"

def is_palindrome(string):

    n = len(string)
    for i in range(n):
        if string[i] != string[n-1-i]:
            return False
    return True


print(is_palindrome(input))
print(is_palindrome(input2))