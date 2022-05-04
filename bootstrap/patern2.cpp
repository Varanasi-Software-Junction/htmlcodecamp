#include<iostream>
using namespace std;
int main()
{
    int i,j,space;
    int n=5;
    for(i=1;i<=n;i++)
    {
        for(j=1;j<=i;j++)
        {
            cout<<"0";
            }
            for(space=1;space<=n-i;space++)
        {
            cout<<" ";
        }
        for(space=1;space<=n-i;space++)
        {
            cout<<" ";
        }
         for(j=1;j<=i;j++)
            {
            cout<<"0";
            }
        
        cout<<"\n";
    }
      for(i=n-1;i>1;i--)
    {
        for(j=1;j<=i;j++)
        {
            cout<<"0";
            for(space=1;space<=n-i;space++)
        {
            cout<<" ";
        }
        for(space=1;space<=n-i;space++)
        {
            cout<<" ";
        }
         for(j=1;j<=i;j++)
            {
            cout<<"0";
            }
        
        cout<<"\n";
    }
    return 0;
}