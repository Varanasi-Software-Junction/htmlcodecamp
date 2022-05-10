#include<iostream>
#include<string.h>
using namespace std;
class Person
{
    private:
    char name[50];
    char address[50];
    char mobile[10];
public:
Person()
{

}
    public:
     Person (char name[50],char address[50],char mobile[10])
    {
         strcpy(this->name,name);
          strcpy(this->address,address);
           strcpy(this->mobile,mobile);
        

    }
    public:
    void print()
    {
        cout<<"NAME ="<<name<<endl;
        cout<<"ADDRESS ="<<address<<endl;
        cout<<"MOBILE NO. ="<<mobile<<endl;
    }
    ~Person()
    {

    }
    
};
class Subject
{
    public:Subject()
    {}
private:
    char name[50];
    int max;
    int pass;
    int obtainedmarks;
public:
    Subject(char name[50],int max,int pass,int obtainedmarks)
    {
        strcpy(this->name,name);
        this->max=max;
        this->pass=pass;
        this->obtainedmarks=obtainedmarks;
    }
    public:
    void print()
    {
    cout<<"Subject ="<<name<<endl;
    cout<<"Max marks ="<<max<<endl;
    cout<<"Passing marks ="<<pass<<endl;
    cout<<"Obtainedmarks ="<<obtainedmarks<<endl;
    }
    ~Subject()
    {

    }
};


class marksheet
{
    private:
    Person student;
    int rollno;
    int claswa;
    Subject phy,chem,math;

    public:
    marksheet(Person student,int rollno,int claswa,Subject phy,Subject chem, Subject math)
    {
         this->student=student;
         this->rollno=rollno;
         this->claswa=claswa;
         this->phy=phy;
         this->chem=chem;
         this->math=math;
         
    }
    public:
    void print()
    {
        student.print();
        cout<<"ROLL NO. = "<<rollno<<endl;
        cout<<"CLASS ="<<claswa<<endl;

        phy.print();
        chem.print();
        math.print();
        
    }
    ~marksheet()
    {

    }

};


int main()
{
    Person p("Shubham","Mumbai","9335874326");
    Subject s1("Physics",100,40,95);
     Subject s2("chemestrey",100,40,80);
      Subject s3("math",100,40,90);


    
   marksheet ms(p,100,10,s1,s2,s3);
   ms.print();
}
