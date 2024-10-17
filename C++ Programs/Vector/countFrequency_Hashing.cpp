#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,x,i,temp;
    cout << "Enter a number of elements : ";
    cin >> n;
    cout << "Enter the limit : ";
    cin >> x;
    vector<int>num(n);
    vector<int>f(x+1,0);
    cout << "Enter the elements \n";
    for(i=0;i<n;i++)
    {
        cin >> temp;
        num[i]=temp;
    }
    cout << "\n";
    for(i=0;i<n;i++)
    {
        f[num[i]]=f[num[i]]+1;
    }
    for(i=1;i<=x;i++)
    {
        cout << i << " : " << f[i] << "\n";
    }
    return 0;
}
