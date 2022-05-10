#include<iostream>
#include<string.h>
using namespace std;
 class time 
 {
     private:
     int hr;
     int min;

     public:
     time(int hr,int min)
     {
         this->hr=hr;
         this->min=min;
     }
     public:
     void print()
     {
    
    if(hr==24 && min==0)
    {
        cout<<"AM";
    }
    if(hr<12 && min<=60)
    {
        cout<<hr<<":"<<min<<"AM";
    }
    else
    {
    if(hr>12 && min<60)
    {
        hr=hr-12;
        cout<<hr<<":"<<min<<"pm";
    }
    }

     }
 };

int main()
{
time t(15,59);
t.print();
}