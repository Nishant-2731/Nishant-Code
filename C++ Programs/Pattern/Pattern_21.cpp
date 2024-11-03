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
        for(int j=0;j<n;j++)
        {
            if(i==0 || i==n-1)
            cout << "* ";
            else if(j==0 || j==n-1)
            cout << "* ";
            else
            cout << "  ";
        }
        cout << "\n";
    }
}