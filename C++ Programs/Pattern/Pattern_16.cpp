#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    char ch='A';
    for(int i=0;i<n;i++)
    {    
        for(int j=0;j<=i;j++)
        {
            cout << ch << " ";
        }
        cout << "\n";
        ch++;
    }
}