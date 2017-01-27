# # x = (1, 2, (3, 'John', 4), 'Hi')
# # x[0] = 8
#
#
# def oddTuples(aTup):
#     tup = ()
#     for i in range(len(aTup)):
#         if i % 2 == 0:
#             tup += (aTup[i],)
#     return tup
# print oddTuples(('I', 'am', 'a', 'test', 'tuple'))
#
# print range(10, 3)
#
# aList = range(1, 6)
# bList = aList
# aList[2] = 'hello'
# print aList is bList
#
# listA = [1, 4, 3, 0]
# listB = ['x', 'z', 't', 'q']
# listA.sort()
# listA.insert(0, 100)
# listB.sort()
# listB.pop()
# listA.extend([4, 1, 6, 3, 4])
# listA.index(1)
# listA.pop(4)
#
#
# print map(abs, [1, -2, -3])
# print -3/2
#
#
# animals = {'a': 'aardvark', 'b': 'baboon', 'c': 'coati'}
# animals['d'] = 'donkey'
# print animals.keys()
# del animals['b']
# print animals.values()
#
#
#
# def howMany(aDict):
#     count = 0
#     for d in aDict.values():
#         if len(d) > 1:
#             for e in d:
#                 count += 1
#         else:
#             count += 1
#     return count



def biggest(aDict):
    result = None
    oldLength = 0
    for d in aDict.keys():
        if len(aDict[d]) >= oldLength:
            result = d
            oldLength = len(aDict[d])
    return result
print biggest({ 'a': ['aardvark'], 'b': ['baboon'], 'c': ['coati', 'dad']})


def f(x):
	import math
	return 400*math.e**(math.log(0.5)/3.66 * x)

def radiationExposure(start, stop, step):
    count = 0
    for i in range(start, stop):
        count += f(i)
    return count
print radiationExposure(0, 4, 0.25)

def getGuessedWord(secretWord, lettersGuessed):
    result = ""
    for w in secretWord:
        if w in lettersGuessed:
            result += w
        else:
            result += "_ "
    return result


def getAvailableLetters(lettersGuessed):
    import string
    result = string.ascii_lowercase
    for w in lettersGuessed:
        if w in result:
            result = string.replace(result, w, "")
    return result
print getAvailableLetters("apple")