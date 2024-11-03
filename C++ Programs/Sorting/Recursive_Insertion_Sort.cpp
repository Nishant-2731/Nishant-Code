#include<bits/stdc++.h>
using namespace std;
void Insertion_Sort(vector<int> &arr,int i)
{
    int temp;
    if(i>0 && arr[i-1]>arr[i])
    {
        temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
        Insertion_Sort(arr,i-1);
    }
}
void Helper(vector<int> &arr,int i)
{
    if(i>0)
    {
        Helper(arr,i-1);
        Insertion_Sort(arr,i);
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