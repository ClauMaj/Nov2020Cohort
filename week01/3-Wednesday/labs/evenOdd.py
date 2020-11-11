number = ""

while number != "exit":
    number = input("Pick a number: ")
    if number.isnumeric() and int(number) % 2 == 0:
        print("This is an even number!")
    elif number.isnumeric() and int(number) != 0:
        print("This is an odd number!")
    else:
        print("Type a number or type 'exit'...")
    number = number.lower()