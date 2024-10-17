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
        for(int j=1;j<=i;j++)
        {
            cout << j <<" ";
        }
        for(int j=0;j<2*(n-i);j++)
        {
            cout << "  ";
        }
        for(int j=i;j>=1;j--)
        {
            cout << j <<" ";
        }
        cout << "\n";
    }
}