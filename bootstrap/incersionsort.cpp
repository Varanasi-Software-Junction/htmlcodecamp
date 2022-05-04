#include<iostream>
using namespace std;
int main()
{
    int a[]={7,3,10,6,8};
    int n=5,i,j,t;
    for(i=0;i<=n-2;i++)
    {
        if(a[i]<=a[i+1])
        
        {
    continue;
        }
    for(j=i+1;j>0;j--)
    {
       if(a[j]<a[j-1])
       {
           t=a[j];
           a[j]=a[j-1];
           a[j-1]=t;
       }
    }
    }
    for(i=0;i<=n-1;i++)
    cout<<a[i]<<",";
    
    return 0;
} 