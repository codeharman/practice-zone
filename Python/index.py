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
