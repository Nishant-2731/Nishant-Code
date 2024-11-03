#include<bits/stdc++.h>
using namespace std;
void merge(vector<int> &arr,int l,int mid,int r)
{
    vector<int>S;
    int i,left=l,right=mid+1;
    while(left<=mid && right<=r)
    {
        if(arr[left] <= arr[right])
        {
            S.push_back(arr[left]);
            left++;
        }
        else
        {
            S.push_back(arr[right]);
            right++;
        }
    }
    while(left<=mid)
    {
        S.push_back(arr[left]);
        left++;
    }
    while(right<=r)
    {
        S.push_back(arr[right]);
        right++;
    }
    for(i=l;i<=r;i++)
    {
        arr[i] = S[i-l];
    }
}
void helper(vector<int> &arr,int l,int r)
{
    if(l<r)
    {
        int mid = (l+r)/2;
        helper(arr,l,mid);
        helper(arr,mid+1,r);
        merge(arr,l,mid,r);
    }
}
int main()
{
    int i,n,temp;
    cout << "Enter the number of elements\n";
    cin >> n;
    vector<int>arr(n);
    cout << "Input the elements\n";
    for(i=0;i<n;i++)
    {
        cin >> temp;
        arr[i]=temp;
    }
    cout << "Before Sorting : ";
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
    helper(arr,0,(n-1));
    cout << "After Sorting : ";
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
    return 0; 
}