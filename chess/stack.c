#include<stdio.h>
#include<stdlib.h>
#define size 10
typedef struct
{
int a[10];
int top;
}stack;
void init(stack* st);
void push(stack* st);
int pop(stack* st);
int isEmpty(stack st);
int main()
{
    stack s;
    char exp[]="((a+b)+(c-d)*a-n)";
    int n=sizeof(exp)/sizeof(char),i;
    int pos,j;
    char ch;
    init(&s);
    for(i=0;i<=n-2;i++)
    {
        ch=exp[i];
        if(ch==' (')
        push(&s,i);
        if(ch==')')
        
        
    }
    return;
}

