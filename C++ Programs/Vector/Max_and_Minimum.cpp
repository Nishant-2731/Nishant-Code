#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,x,i,temp,max,min;
    cout << "Enter the number of elements: ";
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
    sort(num.begin(),num.end());
    cout << "\n";
    for(i=0;i<n;i++)
    {
        f[num[i]]++;
    }
    max=distance(f.begin(),max_element(f.begin(),f.end()));
    min=distance(f.begin()+1,min_element(f.begin()+1,f.end()));
    for(i=1;i<=x;i++)
    {
        cout << i << " : " << f[i] << "\n";
    }
    cout << "\n";
    cout << "Max : " << max << "\nMin : " << min;   
    return 0;
}
