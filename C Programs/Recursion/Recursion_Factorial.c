#include <stdio.h>
int factorial(int number)
{
    if (number == 0 || number == 1)
    {
        return 1;
    }
    else
    {
        return (number * factorial(number - 1));
    }
}
int main()
{
    int num, facto;
    printf("Enter the number you want factorial of: \n");
    scanf("%d", &num);
    facto = factorial(num);
    printf("Factorial of the input number %d is %d", num, facto);
    return 0;
}
