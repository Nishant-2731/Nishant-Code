#include <stdio.h>
void fibonacci(int x)
{
    int i, temp1 = 0, temp2 = 1, fib;
    printf("Fibonacci Series : ");
    if (x < 2)
    {
        printf("0");
    }
    else
    {
        printf("0 1 ");
        for (i = 3; i <= x; i++)
        {
            fib = temp1 + temp2;
            temp1 = temp2;
            temp2 = fib;
            printf("%d ", fib);
        }
    }
}
int main()
{
    int n, i, temp1 = 0, temp2 = 1, fib;
    printf("Enter the term to which fibonacci series is to be printed\n");
    scanf("%d", &n);
    fibonacci(n);
    return 0;
}