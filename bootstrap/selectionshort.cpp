#include<iostream>
using namespace std;
int main()
{
    int ary[]={24,67,9,8,3,1,2},i,j,pos,temp;
    int n=7;
    for(i=0;i<=n-2;i++)
    {
        pos=i;
        for(j=i+1;j<=n-1;j++)
        {
            if(ary[j]>ary[pos])
            {
            pos=j;
            }
        }
        temp=ary[i];
        ary[i]=ary[pos];
        ary[pos]=temp;
    }
        for(i=0;i<=n-1;i++)
        cout<<ary[i]<<",";
    
    return 0;

}
