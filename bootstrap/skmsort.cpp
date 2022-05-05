#include<iostream>
using namespace std;
int main()
{
    int a[]={2,3,7,11,13},b[]={1,4,5,6,10};
    int n1=5,n2=5,n=n1+n2,i=0,j=0,k=0;
    int c[n],temp;
    while(i<=n1-1 && j<=n2-1)
    {
            if(a[i]>=b[j])   //2<=1
            {
              c[k]=b[j];
              j++;
              k++;
            }
        
        else
        {
            c[k]=a[i];
            i++;
            k++;
        }
        while(i<=n1-1)
        {
            c[k]=a[i];
            i++;
            k++;

        }
        while(j<=n2-1)
        {
            c[k]=b[j];
            j++;
            k++;

        }
        
    }
    for(i=0;i<=n-1;i++)
    cout<<c[i]<<",";
    return 0;
}