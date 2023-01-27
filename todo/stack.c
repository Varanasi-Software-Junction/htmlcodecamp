#include <stdio.h>
#include<stdlib.h>
typedef struct mystack{
    int size=0;
    int top;
    int *arr=[10];
    int index=0;
    
} stack; 

 int isEmpty(stack *ptr){
    if(ptr->top == -1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

 int isFull(stack *ptr){
    if(ptr->top == ptr->size-1)
    {
        return 1;
    }
    else{
        return 0;
    }
}
void push(int a)
{
    arr[index]=a;
    index++;
    size++;
}
int pop()
{
    int a=arr[index];
    index--;
    size--;
    return a;
}
void print(int *arr[]){
    for(int i=0;i<=size;i++)
    printf(arr[i]);
    
}

int main()
{
    stack s;
    s.top=-1;
    // s.size=80;
    s.arr=(int *)malloc(s.size* sizeof(int));
    
    
     printf("%d",isFull(&s));
    //push element manually
   push(5);
   push(7);
   print(*arr);
   
    if(isEmpty(&s))
    {
        printf("\n");
        printf("The stack is null");
    }
        
    else
    {
        printf("The stack is not null");
    }
     
  
    

    return 0;
}
