#include<iostream>
using namespace std;
int main()
{
    int a[]={2,3,4,12,18};
    int b[]={1,5,6,15,17};
    
    int n1=5,n2=5,i=0,j=0,k=0,n=n1+n2;
    int c[10];
while (i<=n1-1 && j<=n2-1)
{
    if(a[i]<=b[j])  //2<=1;
    {
        c[k]=a[i];
        i++;
        k++;
    }
    else{
        c[k]=b[j];
        j++;
        k++;
    }
}
while (i<=n1-1)
{
        c[k]=a[i];
        i++;
        k++;
}

while (j<=n2-1)
{
        c[k]=b[j];
        j++;
        k++;
}
    for(i=0;i<=n-1;i++)
   cout<<c[i]<<",";
   cout<<"\n";

    
    return 0;
    
}
