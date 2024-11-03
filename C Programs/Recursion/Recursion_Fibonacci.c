#include <stdio.h>
int fibonacci(int number)
{
    if (number == 1)
    {
        return 0;
    }
    else if (number == 2 || number == 3)
    {
        return 1;
    }
    else
    {
        return // Not Solved
    }
}
int main()
{
    int num, fibo;
    printf("Enter the number you want Fibonacci sum of: \n");
    scanf("%d", &num);
    fibo = fibonacci(num);
    printf("Fibonacci sum of the input number %d is %d", num, fibo);
    return 0;
}
