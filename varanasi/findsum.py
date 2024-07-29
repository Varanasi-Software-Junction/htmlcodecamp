a=[1,2,3,2,2,6,5,4,0]
value=9
p1=0
p2=0
n=len(a)
sum=0
result=""
while True:
    while sum <value:
        sum+=a[p2]
        if sum==value:
            print("Found at ",p2)
            result="found"
            break
        p2+=1
        if p2>=n:
            result="over"
            break
    if result=="over":
        break
    if result=="found":
        break
    while sum>value:
        sum=sum-a[p1]
        p1+=1
        if sum==value:
            result="found"
            break
        if p1>p2:
            result="over"
            break



