#include <iostream>
using namespace std;
int main()
{
    int a[] = {0, 1, 4, 2, 1, 7, 4, 2, 3, 1};
    int n = 10, i, j,x;
    int b[10] = {0};
    int c[10];
    for (i = 0; i <= n - 1; i++)
    {
        x = a[i];
        b[x]++;
    }
    for (i = 0; i <= 9; i++)
        cout << b[i] << ",";
    for (i = 1; i <= 9; i++)
        b[i] += b[i - 1];
    cout << "\n";
    for (i = 0; i <= 9; i++)
        cout << b[i] << ",";
        cout<<endl;
       return 0;
}
