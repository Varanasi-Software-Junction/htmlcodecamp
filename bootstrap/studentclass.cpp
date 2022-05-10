#include<iostream>
#include<string.h>
using namespace std;
class Persion
{
    private:
    char name[50];
    char adress[50];
    char mobile[10];

    private:
     Persion (char name[50],char adress[50],char mobile[10])
    {
         strcpy(this->name,name);
          strcpy(this->adress,adress);
           strcpy(this->mobile,mobile);
        

    }
    public:
    void print()
    {
        cout<<"NAME ="<<name<<endl;
        cout<<"ADDRESS ="<<adress<<endl;
        cout<<"MOBILE NO. ="<<mobile<<endl;
    }
    ~Persion()
    {

    }
    
};
/*class student
{
    private:
    char name[50];
    int rollno;
    int claswa;
    char fathername[50];
    char adress[100];
    char mobile[10];

    private:
    student(char name[50],int rollno,int claswa,char fathername[50],char adress[100],char mobile[10])
    {
         strcpy(this->name,name);
         this->rollno=rollno;
         this->claswa=claswa;
         strcpy(this->fathername,fathername);
         strcpy(this->adress,adress);
         strcpy(this->mobile,mobile);

    }
    public:
    void print()
    {
        cout<<"STUDENT NAME ="<<name<<endl;
        cout<<"ROLL NO. = "<<rollno<<endl;
        cout<<"CLASS ="<<claswa<<endl;
        cout<<"FATHER NAME ="<<fathername<<endl;
        cout<<"ADRESS ="<<adress<<endl;
        cout<<"MOBILE NO. ="<<mobile<<endl;   

    }
    ~student()
    {

    }

};
*/
int main()
{
   Persion p ( "shubham","j1/112b sheshman bazar","8318465690" );
   p.print();

}
