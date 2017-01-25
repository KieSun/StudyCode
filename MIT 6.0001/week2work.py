count = 0
for char in "dadadaddwfefegfsweaaasdsfhuiwefw":
    if char in "aeiou":
        count += 1
print count

# print "azcbobobegghakl".count("bob")
# print cmp("bob", "azcbobobegghakl")

s = "azcbobobegghakl"
count = 0
for index in range(len(s)):
    char = ""
    if index == 0:
        char = s[0:1]
    else:
        char = s[index: index + 1]
    if char == "b" and s[index: index + 3] == "bob":
        count += 1
print count
