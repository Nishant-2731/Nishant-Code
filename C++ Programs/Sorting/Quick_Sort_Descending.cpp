#include<bits/stdc++.h>
using namespace std;
int Quick_Sort(vector<int> &arr, int low, int high)
{
    int pivot=arr[low], i=low, j=high;
    while(i<j)
    {
        while(arr[i]>=pivot && i<high)
        i++;
        while(arr[j]<pivot && j>low)
        j--;
        if(i<j)
        swap(arr[i],arr[j]);
    }
    swap(arr[low],arr[j]);
    return j;
}
void Helper(vector<int> &arr, int low, int high)
{
    if(low<high)
    {
        int pivot = Quick_Sort(arr,low,high);
        Helper(arr,low,pivot-1);
        Helper(arr,pivot+1,high);
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
    Helper(arr,0,n-1);
    cout << "\nAfter Sorting : ";
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
    return 0;
}