#include <iostream>
#include <math.h>
using namespace std;
int main()
{
    int marks;
    cout << "Enter the marks" << "\n";
    cin >> marks;
    if(marks < 25)
    {
        cout << "Your grade is F";
    }
    else if(marks < 45)
    {
        cout << "Your grade is E";
    }
    else if(marks < 50)
    {
        cout << "Your grade is D";
    }
    else if(marks < 60)
    {
        cout << "Your grade is C";
    }
    else if(marks < 80)
    {
        cout << "Your grade is B";
    }
    else if(marks <= 100)
    {
        cout << "Your grade is A";
    }
    else
    {
        cout << "Invalid";
    }
    return 0;
}