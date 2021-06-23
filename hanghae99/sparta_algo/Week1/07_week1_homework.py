## 정수를 입력했을때 그정수 이하의 소수를 모두 반환하시오
## 소수는 자신보다 작은 두 개의 자연수를 곱하여 만들 수없는 1보다 큰 자연수다.

input = 20


# 1 3 5 7 11 13 17 19


def find_prime_list_under_number(number):
    # 이 부분을 채워보세요!
    prime_number =[]
    range_max = number + 1
    for num in range(1, range_max):
        if num > 1:
            for i in range (2, num):
                if num % i == 0:
                    break
            else:
                print(num)
        elif num <= 1:
            print(num)
result = find_prime_list_under_number(input)
print(result)
