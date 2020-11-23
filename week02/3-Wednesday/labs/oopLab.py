

# 1. Create an empty class called "Student"
# class Student:
#     def __init__(self, name):
#         self.name = name
#     def greeting(self):
#         print(f"Good morning {self.name}.")
    # def greet(name):
    #     print(f"Good morning {name}")


#2. Create 5 students objects (instances of the class "Student") of "Student" types

<<<<<<< HEAD
# student1 = Student("One")
# student2 = Student("Two")
# student3 = Student("Three")
# student4 = Student("Four")
# student5 = Student("Five")

# student1 = Student()
# student2 = Student()
# student3 = Student()
# student4 = Student()
# student5 = Student()
# a = [student1,
# student2,
# student3,
# student4,
# student5]
# 3a. Create a "greeting" method inside of the class "Student" class that
=======

#3a. Create a "greeting" method inside of the class "Student" class that 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
# takes as a parameter "name". The return of the  method should be
# "Good morning {name}" 

# print(student1.greeting('one'))
# print(student2.greeting('two'))
# print(student3.greeting('three'))
# print(student4.greeting('four'))
# print(student5.greeting('five'))

# for item in a:
#     item.greeting()

#4. Call the greet  method on each of the students in # 5 passing in a different
# name argument each time.

<<<<<<< HEAD


# 5a. Create a constructor for the Student class.
# 5b. Create a print statement inside of the constructor
# 5c. Run your lab.py again and you should see a print statement for each student object
# That you created
# student1.greeting()
# student2.greeting()
# student3.greeting()
# student4.greeting()
# student5.greeting()
=======
#5a. Create a constructor for the Student class. 
#5b. Create a print statement inside of the constructor
#5c. Run your lab.py again and you should see a print statement for each student object 
# That you created 

>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

#6a. Pass in "name" as a parameter to your Student constructor. 
#6b. Create an instance variable for name
#6c. Refactor your greeting method by removing the name parameter and 
# adding a "self" in front of the printed "name" variable in the return statement 
#6d. Refactor your Student objects by passing in the name as an argument when the
# object gets instantiated 

#7. Class Methods
#7a. Create a "Class" method inside of the "Student" called "campus" that returns the 
# Statement "Digital Crafts - Houston"
# Campus is a "Class" method so it should not have "self" as an argument. 
#7b. call the campus method by invoking Student.campus()
#7c. Call the campus method on each of the student objects 
#7d. Return the name of the student in the campus method (instance variable) (you should
# get an error)

#8. Class Variables 
#8a. Create a class variable inside of the Student class called "cohort" whose value is
# "June 2020 Cohort"
#8b. Print to the console each class variable for each of the student objects, i.e. 
# Michah.cohort 
#8c. Refactor your class method to print out the class variable when it is called 
#8d. Call the class method on the class (i.e. Student.campus())
#8e. Call the class method on each object (i.e. Dan.campus())

#9. Accessor Modifiers 
# Refactor your constructor to take a parameter for studentID
#9a. Create a new instance variable for studentID with the value _studentID
# Refactor the student objects to pass a studentID argument
#9b. Print the studentID value to the console
# Change the value of studentID to __studentID 
# Print the value to the console (you should get an error)


<<<<<<< HEAD
# . Inheritance
# class Car:
#     def __init__(self, make, model,color):
#         self.make = make
#         self.model = model
#         self.color = color
#     def carDetail(self):
#         print(f"Here are the details of the car \nmake {self.make} | model {self.model} | color {self.color}")
=======
#. Inheritance 
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7

# class Hybrid(Car):

#     def carType(self):
#         print("I am a hybrid car")

# class Electric(Car):

#     def carType(self):
#         print("I")
# Create a new class called Car with the following method :
# CarDetails which prints "Here are details of this car"

# Create a new class called Hybrid that inherits from the Car class
#  with the following method: CarType which prints "I am a hybrid car" 


# Create a new class called Electric that inherits from the Car class
#  with the following  method: CarType which prints "I am a hybrid car" 

# Create a Hybrid instance and an Electric instance
# Call the method CarType on the Hybrid Instance and Electric Instance 
# Call the method Car Details on each instance



# Add the following instance variables to the Car class :
# - make 
# - model 
# - color








# Implicit Inheritance 

#. Override Explicitly

# Alter Before or After

# Super()

# COMPOSITION


<<<<<<< HEAD
class Person:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.friends = []

    def greet(self, other_person):
        print('Hello {}, I am {}!'.format(other_person.name, self.name))
    def friend(self , newFriend):
        if newFriend not in self.friends:
            self.friends.append(newFriend)
            newFriend.friends.append(self)

sonny = Person("Sonny", "sonny@hotmail.com", "483-485-4948")
jordan = Person("Jordan", "jordan@aol.com", "495-586-3456")

sonny.greet(jordan)
jordan.greet(sonny)

print(f"Sonny's email: {sonny.email}  and phone: {sonny.phone}")
print(f"Jordan's email: {jordan.email}  and phone: {jordan.phone}")

sonny.friend(jordan)

for item in sonny.friends:
    print(item.name)

for item in jordan.friends:
    print(item.name)
=======
>>>>>>> 915f1d5b41201c1da6377b24f8dee08c0bb9cfa7
