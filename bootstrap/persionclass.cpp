#include<iostream>
#include<string.h>
using namespace std;
class account
{
    private:
     char accountname[50];
     char accountno[50];
     int balance;

    public:
    account(char accountname[50],char accountno[50],int balance)
    {
        strcpy(this->accountname,accountname);
        strcpy(this->accountno,accountno);
        this->balance=balance;
    } 
    public: 
    void deposit()
    {
        int d;
        cout<<"Enter the amount for deposit= ";
        cin>>d;
        balance+=d;
    }
    public:
    void withdraw()
    { int w;
    cout<<"Enter the amount for withdraw= ";
    cin>>w;
    balance-=w;

    }
    public:
    void print()
    {
        cout<<"Account name ="<<accountname<<endl;
        cout<<"Account No.. ="<<accountno<<endl;
        cout<<"Balance ="<<balance<<endl;
    }
    ~account()
    {

    }

};

int main()
{
    account b1("shubham","1245839",1800);
    b1.print();
    b1.deposit();
    b1.print();
    //b1.withdraw();
    //b1.print();

}