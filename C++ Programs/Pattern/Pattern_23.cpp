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
        for(int j=0;j<n-i-1;j++)
        {
            cout << " ";
        }
        for(int j=0;j<2*i+1;j++)
        {
            if(j==0 || i==(n-1))
            cout << "*";
        }
        for(int j=3;j<=((2*i)+1);j++)
        {
            if(i==0 || i==n-1)
            break;
            cout << " ";
        }
        for(int j=0;j<2*i+1;j++)
        {
            if(i==0)
            break;
            if(i==n-1)
            break;
            if(j==(2*i))
            cout << "*";
        }
        for(int j=0;j<n-i-1;j++)
        {
            cout << " ";
        }
        cout << "\n";
    }
}