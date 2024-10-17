#include<bits/stdc++.h>
using namespace std;
int Second_Smallest(vector<int> &a, int n)
{
    int i,min1=a[0],min2=INT_MAX;
    for(i=1;i<n;i++)
    {
        if(a[i]<min1)
        {
            min2=min1;
            min1=a[i];
        }
        else if(a[i]<min2)
        {
            min2=a[i];
        }
    }
    return min2;
}
int Second_Largest(vector<int> &a, int n)
{
    int i,max1=a[0],max2=-1;
    for(i=1;i<n;i++)
    {
        if(a[i]>max1)
        {
            max2=max1;
            max1=a[i];
        }
        else if(a[i]>max2)
        {
            max2=a[i];
        }
    }
    return max2;
}
int main()
{
    int i,n,temp,max2,min2;
    cout << "Enter the number of elements\n";
    cin >> n;
    vector<int>a(n);
    cout << "Input the elements\n";
    for(i=0;i<n;i++)
    {
        cin >> temp;
        a[i]=temp;
    }
    cout << "Array : ";
    for(i=0;i<n;i++)
    cout << a[i] << " ";
    max2=Second_Largest(a,n);
    min2=Second_Smallest(a,n);
    cout << "\n" << "Second Largest : " << max2;
    cout << "\n" << "Second Smallest : " << min2;
    return 0;
}