#include <iostream>
using namespace std;
int main()
{
    int n;
	cout << "Enter a number for pattern" << "\n";
	cin >> n;
	cout << "\n";
    int x = 1;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<=i;j++)
        {
            cout << x << " ";
            x++;
        }
        cout << "\n";
    }
}