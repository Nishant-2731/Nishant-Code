#include <stdio.h>
int Sum_Of(int temp, int num, int sum)
{
    if (temp > num)
    {
        return sum;
    }
    else
    {
        sum = sum + temp;
        Sum_Of((temp + 1), num, sum);
    }
}
int main()
{
    int x, y, Sum;
    printf("Enter the limit of number of w1hich you want print sum of: First Lower Limit and then Upper Limit respectively\n");
    scanf("%d %d", &x, &y);
    Sum = Sum_Of(x, y, 0);
    printf("The sum of limit of number is %d", Sum);
    return 0;
}
