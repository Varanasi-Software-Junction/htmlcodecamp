a = [1, 2, 3, 3, 2, 6, 5, 4, 0]
value = 8
p1 = 0
p2 = 0
n = len(a)
sum = 0
result = ""
solved = False
while True:
    # print("Hello")
    while sum < value:
        print("Here")
        sum += a[p2]
        print(sum, end=",")
        p2 += 1
        if p2 >= n:

            break
    if sum == value:
        print("Found p1=", p1, ", p2=", p2-1, "sum = ", sum)
        solved = True
        break

    if p2 >= n:
        break
    while sum > value:
        sum = sum-a[p1]
        p1 += 1
        if p1 > p2:
            # solved=True
            break
    if sum == value:
        print("Found p1=", p1, ", p2=", p2-1, "sum = ", sum)
        break
