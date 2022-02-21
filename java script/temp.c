#include<stdio.h>
int main()
{
    int n=10209;
    int copy=n,rem,mult=5;
    while (copy>0)
    {
        rem=copy%10;
        copy=copy/10;
        n=(rem==0)?n+mult:n;
        mult=mult*10;

    }
    printf("N=%d",n);
    return 0;
}