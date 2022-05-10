#include<iostream>
using namespace std;
int main()
{
    int a[]={2,3,4,7,8,9,10,5};
    int n=8,i,j,t;
    for(i=0;i<=n-2;i++)
    {
        cout<<"*********"<<i<<"*****"<<endl;
        if(a[i]<=a[i+1])
        
        {
    continue;
        }

    for(j=i+1;j>0;j--)
    {
        bool x= a[j]<a[j-1];
        cout<<j<<" "<<j-1<<" " <<x <<endl;
       if(a[j]<a[j-1])
       {
           t=a[j];
           a[j]=a[j-1];
           a[j-1]=t;
       }
       else{
           break;
       }
    }
    }
    for(i=0;i<=n-1;i++)
    cout<<a[i]<<",";
    
    return 0;
} 