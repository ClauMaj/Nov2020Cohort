# 1. Write a function called power which accepts a base and an exponent.
# The function should return the power of the base to the exponent.

# def power(base,exponent):
#     if exponent ==0:
#         return 1
#     return base * power (base, exponent-1) 


# 2. Write a function factorial which accepts a number and returns
# the factorial of that number.  A factorial is the product of an
# interger and all the integers below it; eg. , factorial four( 4!) is
# equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

# def factorial(n):
#     if n == 0 or n == 1:
#         return 1
#     return n * factorial(n-1)

# result = factorial(0)
# print(result)

# 3. Write a function called recursiveRange which accepts a number and adds up all
# the numbers from 0 to the number passed to the function

# def sumrec(n):
#     if n == 0:
#         return 0
#     return n + sumrec(n-1)

# result = sumrec(3)
# print(result)

# 4. Write a recursive function called reverse which accepts
# a string and returns a new string in reverse

# def revstr(a):
#     if len(a) == 0:
#         return a
#     return revstr(a[1:]) + a[0]

# result = revstr("python")
# print(result)


# 5. Write a recursive function called isPalindrome which returns
# true if the string passed to it is a palindrome (reads the same forward and backward).
# Otherwise returns false.

# def palindrome(a):
#     if len(a) == 0 or len(a) == 1:
#         return True
#     if a[0] == a[-1] and palindrome(a[1:-1]):
#         return True
#     return False

# result = palindrome("amanaplanacanalpanama")
# print(result)

# isPalindrome('awesome') // false
# isPalindrome('foobar') // false
# isPalindrome('tacocat') // true
# isPalindrome('amanaplanacanalpanama') // true
# isPalindrome('amanaplanacanalpandemonium') // false


# 6. Write  function called product ofArray which takes in
# an array of numbers and returns the product of them allS

def productOfArray(n):
    if len(n) == 1:
        return n[0]
    return n[0] * productOfArray(n[1:])

print(productOfArray([ 1 ,2 ,3 , 4]))

# 7. Write a recursive function called fib which accepts a number and
# returns the nth number in teh Fibonacci Sequence. Recall that the
# Fibonacci Sequence is the Sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which
# starts with 1 and 1, and where ever number
# thereafter is equal to the sum of the previous two numbers.

