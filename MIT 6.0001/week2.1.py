def clip(lo, x, hi):
    return min(max(x, lo), hi)


a = clip(1, 2, 3)
print a

a = 10


def f(x):
    return x + a


a = 3
print f(1)

x = 12


def g(x):
    x = x + 1

    def h(y):
        return x + y

    return h(6)


print g(x)


def square(x):
    return x * x


def fourthPower(x):
    return square(x) ** 2


print fourthPower(2)


def checkVowel(char):
    return char in "aeiou" or char in "AEIOU"


print checkVowel("n")

# import week2
# week2.check()
from week2 import *
check()

str1 = 'exterminate!'
str2 = 'number one - the larch'
print str1.upper()
print str1.isupper()
str2 = str2.capitalize()
print str2.swapcase()
print str1.index("e")
# print str2.index("!")
print str2.find("!")
print str1.count("e")
str1 = str1.replace('e', '*')
print str1
print str2.replace('one', 'seven')