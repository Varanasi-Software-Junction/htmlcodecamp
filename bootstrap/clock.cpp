#include<iostream>
using namespace std;
int main()
{
    int hr,min;
    cout<<"Enter the time "<<endl;
    cin>>hr;
    cout<<"Enter the min"<<endl;
    cin>>min;
    
    if(hr==24 && min==0)
    {
        cout<<"mid night";
    }
    if(hr<12 && min<=60)
    {
        cout<<hr<<":"<<min<<"AM";
    }
    else
    {
        if(hr>11 && min<60)
        {
             cout<<hr<<":"<<min<<"pm";
        }
        
    }

    

    return 0;
}
