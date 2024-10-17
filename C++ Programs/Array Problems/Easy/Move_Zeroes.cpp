#include <bits/stdc++.h>
using namespace std;
void moveZero(vector<int> &arr)
{
    int i, j = -1, n = arr.size();
    if (n > 1)
    {
        for (i = 0; i < n; i++)
        {
            if (arr[i] == 0)
            {
                j = i;
                break;
            }
        }
        if (n != -1)
        {
            for (i = j + 1; i < n; i++)
            {
                if (arr[i] != 0)
                {
                    swap(arr[i], arr[j]);
                    j++;
                }
            }
        }
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
    moveZero(arr);
    for(i=0;i<n;i++)
    cout << arr[i] << " ";
}
