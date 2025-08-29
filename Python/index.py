# the first lesson is how to print inside the python we use print

print ('This is my first print')

# the second thing we learned is the variables, they are like storage box

firstName = 'Harman'
lastName = 'Singh'

print (firstName + ' ' + lastName)

# I learned what are the different datatypes and typecasting

firstdiploma = "software engineering"

print(firstdiploma)

# how to knwo which datatype are we talking about by using the type input

print (type("hello")) #string
print (type(2)) #integer
print (type(True)) #boolean
print (type(1.24)) #float 

# Variables and datatypes excercise
# we run hardware store so we are going to put the items, name and price and how much on print

itemName = 'Hammer'
itemPrice = 10.50
itemQuantity = 2

print(str(itemName) + ' ' + str(itemPrice) + " " + str(itemQuantity))
print(itemName, itemPrice, itemQuantity)


#user input
#I learned how to make input user thing in the python where one can put the input data and get the result

#I made the calculator

num1=input('Enter a digit: ')
num2=input('Enter a second numnber: ')
answer=float(num1)+float(num2)
print(answer)

# another example of making the etre conjucation

frenchWord = input('Entre the word: ')
answer1 = "Je " + str(frenchWord)
answer2 = "tu " + str(frenchWord)
answer3 = "Il/elle " + str(frenchWord)
answer4 = "Nous " + str(frenchWord)
answer5 = "Vous " + str(frenchWord)
answer6 = "Ils/elles" + str(frenchWord)

print(answer1, answer2, answer3, answer4, answer5, answer6)

#next I learned the arthemetic opereators
#so i Will explain all the possible varients

a = 4
b = 6

print('addition : ', a + b)
print('substraction : ', a - b)
print('Multiply : ', a * b)
print('division : ', a / b)
print('Modulus : ', a % b)
print('exponent : ', a ** b)

# I learned strings and slicing

#Strings

heading = "hey harman How are you?"

print(heading.capitalize())
print(heading.title())
print(heading.lower())
print(heading.count("Harman"))

#slicing

msg = "how are you"

print (msg[2])

# we use trip[le quotes for multiple lines

harman = '''hey harman
how are you
i am fine'''

print (harman)

# we can use find to find the index and the replace to replace the words

msg = 'Welcome to the python programming'

#this is where we use the find function
print(msg.find('python'))

#this is where we use the replace function
print(msg.replace('python', 'JavaScript'))

# we can also verify the strings through true and fallse

# the below one is true
print("python" in msg)

#the below one is false 
print("python" not in msg)

# I learned we can use the f to make the string more readable

firstName = 'Harman'
lastName = 'Singh'
age = 25

print(f'My name is {firstName.capitalize()} {lastName.capitalize()} and my age is {age}')


# I learned how to create the lists

friends = ['Harman', 'Taploo', 'Nav']

print(friends[1])
print(friends[0:2])

# I learned the sort and reverse function

numbers = [3, 5, 1, 8, 2]
numbers.sort()

# I learned how to use the sum, max and min function

print(sum(numbers))
print(max(numbers))
print(min(numbers))
print(len(numbers))

# Spliting and joining the lists

#splitting function

msg = "Welcome to the python programming"
newMsg = msg.split(' ')
print(newMsg)

#joing function

friends = ['Harman', 'Taploo', 'Nav']
newFriends = 's'.join(friends)
print(newFriends)

#Tuples and they can't be changes 

coordinates = [4, 5]
newCoordinates = (4, 5)

print(coordinates)
print(newCoordinates)

# I learned funtions - calling, parameters, arguments, defaults

#we use def to define the function

def greetUser(name):
    print(f'Hi {name}, How are you?')

name = input('Enter your name: ')
greetUser(name)

