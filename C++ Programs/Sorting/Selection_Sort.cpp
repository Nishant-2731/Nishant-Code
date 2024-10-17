#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,i,j,min,temp;
    cout << "Enter the number the elements\n";
    cin >> n;
    int A[n];
    cout << "Input the elements\n";
    for(i=0;i<n;i++)
    cin >> A[i];
    for(i=0;i<n-1;i++)
    {
        min=i;
        for(j=i;j<n;j++)
        {
            if(A[j]<A[min])
            min=j;
        }
        temp = A[i];
        A[i] = A[min];
        A[min] = temp;
    }
    for(i=0;i<n;i++)
    {
        cout << A[i] << " ";
    }
    return 0;
}