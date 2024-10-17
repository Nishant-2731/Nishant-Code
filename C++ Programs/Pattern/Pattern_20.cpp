#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    for(int i=1;i<=n;i++)
    {
        for(int j=0;j<i;j++)
        {
            cout << "* ";
        }
        for(int j=0;j<2*(n-i);j++)
        {
            cout << "  ";
        }
        for(int j=0;j<i;j++)
        {
            cout << "* ";
        }
        cout << "\n";
    }
    for(int i=0;i<n-1;i++)
    {
        for(int j=0;j<(n-1)-i;j++)
        {
            cout << "* ";
        }
        for(int j=0;j<2*(i+1);j++)
        {
            cout << "  ";
        }
        for(int j=0;j<(n-1)-i;j++)
        {
            cout << "* ";
        }
        cout << "\n";
    }
}