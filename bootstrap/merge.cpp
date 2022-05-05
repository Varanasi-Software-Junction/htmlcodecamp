#include<iostream>
using namespace std;
void mergeSort(int a[],int left,int right);
int main()
{
    int a[]={3,2,4,5,6,1};
    int i,n=6;
        for(i=0;i<=n-1;i++)
    cout<<a[i]<<",";
    cout<<endl;
mergeSort(a,0,n-1);
    for(i=0;i<=n-1;i++)
    cout<<a[i]<<",";
    
    return 0;
    
}
void mergeSort(int a[],int left,int right)
{
    if(left>=right)
    return;
int mid=(left + right)/2;
mergeSort(a,left,mid);
mergeSort(a,mid+1,right);
int i=left,j=mid+1,k=0;
int c[right-left + 1];
while(i<=mid && j<=right)
{
    if(a[i]<=a[j])
    {
        c[k]=a[i];
        i++;
        k++;
    }
    else 
    {
        c[k]=a[j];
        j++;
        k++;
    }
}
while(i<=mid)
{
    c[k]=a[i];
    i++;
    k++;
}
while(j<=right)
{
    c[k]=a[j];
    j++;
    k++;
}
for(i=left;i<=right;i++)
a[i]=c[i-left];


}