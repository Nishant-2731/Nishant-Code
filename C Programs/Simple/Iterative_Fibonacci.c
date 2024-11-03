#include <stdio.h>
int main()
{
    int n, i, temp1 = 0, temp2 = 1, fib;
    printf("Enter the term to which fibonacci series is to be printed\n");
    scanf("%d", &n);
    printf("Fibonacci Series : ");
    if (n < 2)
    {
        printf("0");
    }
    else
    {
        printf("0 1 ");
        for (i = 3; i <= n; i++)
        {
            fib = temp1 + temp2;
            temp1 = temp2;
            temp2 = fib;
            printf("%d ", fib);
        }
    }
    return 0;
}