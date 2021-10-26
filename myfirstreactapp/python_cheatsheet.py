# print with format

print('What is your name?')   # ask for their nam
myName = input()
print('It is good to meet you, {}'.format(myName))

#####################################

# check if array is empty
a = [1, 2, 3]
if a:
  print("the list is not empty!")
#####################################

# for loop with 3 parm
for i in range(0, 10, 2):
    print(i)
#  0,2,4,6,8
#####################################

#print with seperator
print('cats', 'dogs', 'mice', sep=',')
# cats,dogs,mice
#####################################

# for loop on array
# i is Index , and "supply" is the the element 

supplies = ['pens', 'staplers', 'flame-throwers', 'binders']
for i, supply in enumerate(supplies):
    print('Index {} in supplies is: {}'.format(str(i), supply))
# Index 0 in supplies is: pens
# Index 1 in supplies is: staplers
# Index 2 in supplies is: flame-throwers
# Index 3 in supplies is: binders

#####################################
