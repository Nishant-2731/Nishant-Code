#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    for(int i=n-1;i>=0;i--)
    {
        for(int j=n-i-1;j>0;j--)
        {
            cout << " ";
        }
        for(int j=2*i+1;j>0;j--)
        {
            cout << "*";
        }
        for(int j=n-i-1;j>0;j--)
        {
            cout << " ";
        }
        cout << "\n";
    }
    //ANOTHER METHOD
    //
    //
    //
    // for(int i=0;i<n;i++)
    // {
    //     for(int j=0;j<i;j++)
    //     {
    //         cout << " ";
    //     }
    //     for(int j=0;j<2*(n-i)-1;j++)
    //     {
    //         cout << "*";
    //     }
    //     for(int j=0;j<i;j++)
    //     {
    //         cout << " ";
    //     }
    //     cout << "\n";
    // }
}