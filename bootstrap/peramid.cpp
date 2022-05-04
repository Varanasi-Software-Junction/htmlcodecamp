#include<iostream>
using namespace std;
int main()
{
   int i,j,n=5,space;
  /* c*/
   for(i=n-1;i>1;i--)
   {
       for(space=0;space<n-i;space++)
       {
           cout<<" ";
       }

       for(j=1;j<=2*i-1;j++)
       {
           cout<<0;
       }
       cout<<"\n";
   }
   for(i=1;i<=n;i++)
   {
       for(space=0;space<n-i;space++)
       {
           cout<<" ";
       }

       for(j=1;j<=2*i-1;j++)
       {
           cout<<0;
       }
       cout<<"\n";

   }
   
    return 0;

}




