#include<iostream>
#include<math.h>
using namespace std;
int main() 
{
	int n,sum_e,sum_o,r;
	cin >> n;
	while(n > 0)
	{
		r = n%10;
		if(r%2 == 0)
		{
			sum_e = sum_e+r;
		}
		else
		{
			sum_o = sum_o+r;
		}
		n = n/10;
	}
	cout << sum_e << " " << sum_o;
}