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
        for(int j=0;j<n-i-1;j++)
        {
            cout << "  ";
        }
        for(int j=0;j<2*i+1;j++)
        {
            cout << ch << " ";
            if(j < (2*i+1)/2)
            ch++;
            else
            ch--;
        }
        for(int j=0;j<n-i-1;j++)
        {
            cout << "  ";
        }
        cout << "\n";
    }
}