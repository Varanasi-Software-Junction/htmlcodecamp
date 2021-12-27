#include<stdio.h>
#define size 30
typedef struct 
{
    int top;
    int data[size];   
}stack;
void init(stack* st);
void push(stack* st,int data);
int pop(stack* st);
int empty(stack st);
int main()
{
    stack st;
    int j;
    init(&st);
    int a[]={1,2,3,4,5},i;            //"(a*(b+c-d*(x+y)))",i;
    int n=sizeof(a)/sizeof(int);
    for(i=0;i<=n-1;i++)
    printf("%d,"a[i]);
    return 0;


}
void init(stack* st)
{
    st->top=0;
}
void push(stack* st,int data)
{
    if (st->top>=size)
    {
        printf("stack is full\n");
        return;
    }
    st->data[st->top]=data;
    st->top++;
}
int pop(stack* st)
{
    if (st->top<=0)
    {
        printf("stack is impty\n");
        return -1;
    }
    
    st->top--;
    return st->data[st->top];

}
int empty(stack st)
{
    if(st.top<=0)
    return 1;
    return 0;
}





