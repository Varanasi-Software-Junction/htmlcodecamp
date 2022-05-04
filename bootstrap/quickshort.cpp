#include<iostream>
using namespace std;
void quickSort(int a[],int left,int right);
int main()
{
    int a[]={2,3,14,12,18};
    int n=5,i;
    quickSort(a,0,n-1);
    for(i=0;i<=n-1;i++)
   cout<<a[i]<<",";
    return 0;
    
}
void quickSort(int a[],int left,int right)
{
    if(left>=right)
    return;
int pvt=a[left],fp=left,i,t;
    for(i=left + 1;i<=right;i++)
    {
        if(a[i]>=pvt)
        {
            continue;
        }
        fp++;
        t=a[i];
        a[i]=a[fp];
        a[fp]=t;
        }
         t=a[left];
        a[left]=a[fp];
        a[fp]=t;
    quickSort(a,left,fp-1);
    quickSort(a,fp+1,right);
}