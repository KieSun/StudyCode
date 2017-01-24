# a = 2
# while a < 11:
#     print a
#     a += 2
# print "Goodbye!"
#
# total = 0
# current = 1
# while current <= 6:
#     total += current
#     current += 1
# print total
#
# name = 'yck'
# for e in name:
#     print e
#
# for i in range(1, 7):
#     print i
# for n in range(2, 11, 2):
#     print n
# print "Goodbye!"
# for n in range(10, 0, -2):
#     print n
#
# number = 0
# for n in range(1, 6):
#     number += n
# print number

# a = bin(1)
# print a

# x = 25
# epsilon = 0.01
# step = 0.1
# guess = 0.0
#
# while guess <= x:
#     if abs(guess**2 -x) < epsilon:
#         break
#     else:
#         guess += step
#
# if abs(guess**2 - x) >= epsilon:
#     print 'failed'
# else:
#     print 'succeeded: ' + str(guess)
#
# x = 25
# epsilon = 0.01
# step = 0.1
# guess = 0.0
#
# while guess <= x:
#     if abs(guess**2 -x) >= epsilon:
#         guess += step
#
# if abs(guess**2 - x) >= epsilon:
#     print 'failed'
# else:
#     print 'succeeded: ' + str(guess)

# hi = 100
# lo = 0
# guessed = False
#
# while not guessed:
#     guess = (hi + lo) / 2
#     print("Is your secret number " + str(guess) + "?")
#     user_inp = raw_input( "Enter 'h' to indicate the guess is too high. Enter 'l' to indicate the guess is too low. Enter 'c' to indicate I guessed correctly. ")
#
#     if user_inp == 'c':
#         # We got it right!
#         guessed = True
#     elif user_inp == 'h':
#         # Guess was too high. So make the current guess the highest possible guess.
#         hi = guess
#     elif user_inp == 'l':
#         # Guess was too low. So make the current guess the lowest possible guess.
#         lo = guess
#     else:
#         print("Sorry, I did not understand your input.")
#
# print guess

eo = 0.01
y = 25.0
guess = y / 2

while abs(guess * guess - y) >= eo:
    guess = guess - (guess ** 2 - y) / (guess * 2)
print guess


def check():
    print 1
