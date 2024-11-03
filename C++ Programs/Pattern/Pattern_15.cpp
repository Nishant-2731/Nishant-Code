#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    for(int i=n;i>0;i--)
    {
        char ch='A';
        for(int j=i;j>0;j--)
        {
            cout << ch << " ";
            ch++;
        }
        cout << "\n";
    }
}