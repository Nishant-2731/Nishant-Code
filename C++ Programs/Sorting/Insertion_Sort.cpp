#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,i,j,temp;
    cout << "Enter the number of elements\n";
    cin >> n;
    int A[n];
    cout << "Input the elements\n";
    for(i=0;i<n;i++)
    cin >> A[i];
    for(i=1;i<n;i++)
    {
        j=i;
        while(j>0 && A[j-1]>A[j])
        {
            temp = A[j];
            A[j] = A[j-1];
            A[j-1] = temp;
            j=j-1;
        }
    }
    for(i=0;i<n;i++)
    {
        cout << A[i] << " ";
    }
    return 0;
}