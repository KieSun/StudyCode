# def iterPower(base, exp):
#     result = 1
#     if exp == 0:
#         return result
#     else:
#         return result * base * iterPower(base, exp - 1)
# print iterPower(3.38, 8)

def recurPower(base, exp):
    result = 1
    if exp < 0:
        return result
    else:
        def iterPower(base, exp):
            result = 1
            if exp == 0:
                return result
            else:
                return result * base * iterPower(base, exp - 1)
        return iterPower(base, exp) * recurPower(base, exp - 1)
print recurPower(0.96, 2)

def checkdaixie(weight, height, age):
    return 66 + 13.7 * weight + 5.0 * height - 6.8 * age
print checkdaixie(87.8, 180, 24)


def gcdIter(a, b):
    if a == b:
        return a
    elif a > b:
        return gcdIter(a - b, b)
    elif a < b:
        return gcdIter(a, b - a)
print gcdIter(6, 12)

def gcdRecur(a, b):
    '''
    a, b: positive integers

    returns: a positive integer, the greatest common divisor of a & b.
    '''
    # Base case is when b = 0
    if b == 0:
        return a
    # Recursive case
    return gcdRecur(b, a % b)
print gcdRecur(6, 12)

def printMessage(f, t):
    print "move " + str(f) + " to " + str(t)





def tower(number, f, t, s):
    if number == 1:
        return printMessage(f, t)
    else:
        tower(number - 1, f, s, t)
        tower(1, f, t, s)
        tower(number - 1, s, t, f)
print tower(4, "f", "t", "s")



def fei(x):
    assert type(x) == int and x > -1
    if x == 0 or x == 1:
        return 1
    return fei(x - 1) + fei(x - 2)


def lenRecur(aStr):
    if aStr == "":
        return 0
    else:
        return 1 + lenRecur(aStr[1:])
print lenRecur("aaaa")


def isIn(char, aStr):
    if char == aStr:
        return True
    elif len(char) == len(aStr) and char != aStr:
        return False
    elif char < aStr:
        return isIn(char, aStr[:len(aStr) / 2])
    elif char > aStr:
        return isIn(char, aStr[len(aStr) / 2 - 1:])

print isIn("a", "afsjhf")


def semordnilapWrapper(str1, str2):
    if len(str1) == 1 or len(str2) == 1:
        return False
    if str1 == str2:
        return False

    return semordnilap(str1, str2)


def semordnilap(str1, str2):
    if len(str1) != len(str2):
        return False

    if len(str1) == 1:
        return str1 == str2
    if str1[0] == str2[-1]:
        return semordnilap(str1[1:], str2[:-1])
    else:
        return False
print semordnilap("dog", "god")