#include<bits/stdc++.h>
using namespace std;
int main()
{
vector<int> v={1,2,3,4,5,6,7,8,9,10};
for(auto it=v.begin();it!=v.end();it++)
{
    cout << *(it) << " ";               //For displaying for conditional questions
}
cout << "\n";
for(auto it:v)
{
    cout << it << " ";                  //Only For displaying
}
}