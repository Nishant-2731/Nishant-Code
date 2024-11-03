#include<bits/stdc++.h>
using namespace std;
int Fibonacci(int n)
{
    if(n<2)
    {
        return 0;
    }
    else if(n==2)
    {
        return 1;
    }
    else
    {
        return Fibonacci(n-1)+Fibonacci(n-2);
    }
}
int main()
{
    int i,x,temp;
    cout << "Enter the number to which fibonacci series will print\n";
    cin >> x;
    for(i=1;i<=x;i++)
    {
        temp=Fibonacci(i);
        cout << temp << " ";
    }
}
