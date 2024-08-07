def drawMaze(maze):
    for row in maze:
        print(row)

def mazeSolve(maze):
    maxx=len(maze[0])-1
    maxy=len(maze)-1
    dir=1
    homey,homex=maxy,maxx
    while True:
        if dir==1:
            if homex>=maxx:
                dir =(dir+1)%maxx
                x+=1
dir = 1
n=4
col=[0 for x in range(n)]
maze=[col.copy() for x in range(n)  ]
drawMaze(maze)
while True:
    print(dir)
    dir = (dir + 1) % 4
    input()
