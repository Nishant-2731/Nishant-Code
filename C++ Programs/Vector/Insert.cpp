#include<bits/stdc++.h>
using namespace std;
int main()
{
vector<int> v1={1,2,3,4,5,6,7,8,9,10};
vector<int> v2={11,12,13,14,15};
v1.insert(v1.end(),v2.begin(),v2.end());
cout << "\n";
for(auto it:v1)
{
    cout << it << " ";                  //Only For displaying
}
}