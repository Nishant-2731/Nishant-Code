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
        char ch='A'+n-1;
        for(int j=0;j<=i;j++)
        {
            cout << ch << " ";
            ch--;
        }
        cout << "\n";
    }
}