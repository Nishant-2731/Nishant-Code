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
		for(int j=1;j<=i;j++)
		{
			cout << "* ";
		}
		cout << "\n";
	}
}