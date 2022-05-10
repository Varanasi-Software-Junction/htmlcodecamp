#include <iostream>
#include <string.h>
using namespace std;
class Book // Class definition
{
private: // Class Variables
    char bookname[50];
    char authorname[100];
    int price;

public:
    Book(char bookname[50], char authorname[100], int price)
    { // Constructor
        strcpy(this->authorname, authorname);
        strcpy(this->bookname, bookname);
        this->price = price;
    }

public:
    void print()
    {
        cout << "Book Name = " << bookname << endl;
        cout << "Author name = " << authorname << endl;
        cout << "Price = " << price << endl;
    }
    ~Book()
    {
        // Destructor
    }
};

int main()
{
    //Book b1("Basic C", "Shubham ", 200); // Calling the constructor
    //b1.print();

    Book b2("Basic C++", "Shubham ", 300); // Calling the constructor
    b2.print();
    Book b3("Basic java", "shivank ", 500); // Calling the constructor
    b3.print();
}
