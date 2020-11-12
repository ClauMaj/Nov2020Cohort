# start = 1
# end = 1
# while start <= 10:
#     print(f"\nMultiplication of: {start}")
#     while end <= 10:
#         print(f"{start} X {end} = {start * end}")
#         end += 1
#     start += 1
#     end = 0

for start in range(1, 11):
    for end in range(1, 11):
        if end == 1:
            print(f"\nMultiplication of: {start}")
        print(f"{start} X {end} = {start * end}")