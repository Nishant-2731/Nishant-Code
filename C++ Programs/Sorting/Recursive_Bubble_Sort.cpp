#include<bits/stdc++.h>
using namespace std;
void Bubble_Sort(vector<int> &arr,int n,int i)
{
    int temp;
    if(i<n)
    {
        if(arr[i]>arr[i+1])
        {
            temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            Bubble_Sort(arr,n,i+1);
        }
        else
        {
            Bubble_Sort(arr,n,i+1);
        }
    }
}
void Helper(vector<int> &arr,int n)
{
    if(n>1)
    {
        Bubble_Sort(arr,n,0);
        Helper(arr,n-1);
    }
}
int main()
{
    int i,n,temp;
    cout << "Enter the number of elements : ";
    cin >> n;
    vector<int>arr(n);
    cout << "Enter the elements :- \n";
    for(i=0;i<n;i++)
    {
        cin >> temp;
        arr[i]=temp;
    }
    cout << "Before Sorting : ";
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
    Helper(arr,n-1);
    cout << "\nAfter Sorting : ";
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
    return 0;
}