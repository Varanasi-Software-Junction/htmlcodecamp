#include<stdio.h>
int main()
{
    int a[]={1,2,3,4,5,5,7,7},i,j;
    int n=sizeof(a)/sizeof(int);
    for(i=0;i<=n-1;i++)
    for(j=i+1;j<n;j++)
    if(a[i]==a[j])
    printf("%d,",a[i]);
    return;
}
