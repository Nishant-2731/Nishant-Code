#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    for(int i=0;i<n;i++)
    {
        char ch='A';
        for(int j=0;j<=i;j++)
        {
            cout << ch << " ";
            ch = ch+1;
        }
        cout << "\n";
    }
}