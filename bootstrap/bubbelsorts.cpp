#include<iostream>
using namespace std;
int main()
{
    int a[]={10,5,2,6,7,3,1};
    int n=7,i,j,t;
    for(i=0;i<=n-1;i++)
    {
        //int flag=0;
        for(j=0;j<=n-1;j++)
        {
            if(a[j]>a[j+1])
            {
                t=a[j];
                a[j]=a[j+1];
                a[j+1]=t;
                //flag=1;
            }
        }
        //if(flag==0)
       // break;
    }
    for(i=0;i<=n-1;i++)
    cout<<a[i]<<",";
    return 0;
}
