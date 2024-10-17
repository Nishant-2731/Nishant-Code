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
			cout << i << " ";
		}
		cout << "\n";
	}
}