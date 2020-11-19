# 1. Create a dictionary called zodiac with the following inforation.
# Each key is the name of the zodiac

# zodiac = {
#         "Aries" : "The Warrior",
#         "Taurus" : "The Builder",
#         "Gemini" : "The Messenger",
#         "Cancer" : "The Mother",
#         "Leo" : "The King",
#         "Virgo" : "The Analyst",
#         "Libra" : "The Judge",
#         "Scorpio" : "The Magician",
#         "Sagittarius" : "the Gypsy",
#         "Capricorn" : "the Father",
#         "Aquarius" : "The Thinker",
#         "Pisces" : "TheMystic",
# }

# # 1a. Retrieve information about your zodiac from the zodiac dictionary
# zodiac["Gemini"] # get a var by name
# zodiac.get['whatever'] #checks if the item is in the dictyonary or returns None
# "whatever" in zodiac #checks if it's there - returns boolean
# # 2. Given the following dictionary

# phonebook_dict = {
#     'Alice': '703-493-1834',
#     'Bob': '857-384-1234',
#     'Elizabeth': '484-584-2923'
# }



# # 2a. Print Elizabeth's phone number
# print(phonebook_dict['Elizabeth'])
# # 2b. Add a entry to the dictionary: Kareem's number is 938-489-1234.
# phonebook_dict["Kareem"] = "938-489-1234"
# # 2c. Delete Alice's phone entry.
# del phonebook_dict['Alice']
# # 2d. Change Bob's phone number to '968-345-2345'.
# phonebook_dict['Bob'] = "968-345-2345"
# # 2e. Print all the phone entries.
# print(phonebook_dict.items())
# for key, value in phonebook_dict.items():
#     print(key)
#     print(value)
# 3. Nested dictionaries

# ramit = {
#     'name': 'Ramit',
#     'email': 'ramit@gmail.com',
#     'interests': ['movies', 'tennis'],
#     'friends': [
#         {
#             'name': 'Jasmine',
#             'email': 'jasmine@yahoo.com',
#             'interests': ['photography', 'tennis']
#         },
#         {
#             'name': 'Jan',
#             'email': 'jan@hotmail.com',
#             'interests': ['movies', 'tv']
#         }
#     ]
# }
# # 3a. Write a python expression that gets the email address of Ramit.
# print(ramit['email'])
# # 3b. Write a python expression that gets the first of Ramit's interests.
# print(ramit['interests'][0])
# # 3c. Write a python expression that gets the email address of Jasmine.
# print(ramit['friends'][0]['email'])
# # 3d. Write a python expression that gets the second of Jan's two interests.
# print(ramit['friends'][1]['interests'][1])


# 4. Letter Summary
# Write a letter_histogram function that takes a word as its input,
# and returns a dictionary containing the tally of how many times
# each letter in the alphabet was used in the word. For example:

# def histogram(word):
#     count = {}
#     for i in word:
#         if i not in count:
#             count[i] = 1
#         else:
#             count[i] += 1
#     return count
# print(histogram("banana"))


# >>>letter_histogram('banana')
# {'a': 3, 'b': 1, 'n': 2}


# Word Summary
# Write a word_histogram function that takes a paragraph of text as its input, and returns a dictionary containing the tally of how many times each word in the alphabet was used in the text. For example:
def histogram2(paragraph):
    count = {}
    text = paragraph.lower().split(" ")
    for i in text:
        if i not in count:
            count[i] = 1
        else:
            count[i] +=1
    return count

v = histogram2('To be or not to be be be be')
print(v)

# >>> word_histogram('To be or not to be')

# 3. Sorting a histogram
# Given a histogram tally (one returned from either letter_histogram or word_histogram), print the top 3 words or letters.

def sort(a):
    return sorted(a.items(), key=lambda r: r[1], reverse=True)

print(sort(v))
# def histogram3(string):
#     freq = {}
#     for i in string: 
#         freq[i] = freq.get(i,0) + 1
#     return freq
# print(histogram('banananana'))

# dc pass: narf

# 3. Sorting a histogram
# Given a histogram tally (one returned from either letter_histogram or word_histogram), print the top 3 words or letters.
def top3(dict):
    topList = []
    for i in range(0, 3):
        max1 = (max(dict.values()))
        for item in dict:
            if dict[item] == max1:
                topList.append(item)
                break
        del dict[item]
    print(topList)
top3(LetterSummary.letter_histogram("bananas ssssss"))