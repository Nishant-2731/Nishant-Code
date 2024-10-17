#include <stdio.h>
int main()
{
    int n;
	printf("Enter a number for pattern\n");
	scanf("%d",&n);
	printf("\n");
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n-i-1;j++)
        {
            printf(" ");
        }
        for(int j=0;j<2*i+1;j++)
        {
            if(j==0 || i==(n-1))
            printf("*");
        }
        for(int j=3;j<=((2*i)+1);j++)
        {
            if(i==0 || i==n-1)
            break;
            printf(" ");
        }
        for(int j=0;j<2*i+1;j++)
        {
            if(i==n-1)
            break;
            if(i==0)
            break;
            if(j==(2*i))
            printf("*");
        }
        for(int j=0;j<n-i-1;j++)
        {
            printf(" ");
        }
        printf("\n");
    }
}