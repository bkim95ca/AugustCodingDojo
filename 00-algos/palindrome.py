def isPalindrome(x) -> bool:
    if x<0:
        return False

    inputNum = x
    newNum = 0
    while x>0:
        newNum = newNum * 10 + x%10
        print('newNum:', newNum)
        x = x//10
        print('x:', x)
    # return newNum == inputNum

print(isPalindrome(1232341234))