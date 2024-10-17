#include <stdio.h>
#include <math.h>
int B_to_D(int n)
{
    int r = n % 10;
    if (n > 0)
    {
        n = n / 10;
        return pow(2, r) + B_to_D(n);
    }
    else
    {
        return 0;
    }
}
int main()
{
    int Binary, Decimal;
    printf("Enter a binary number \n");
    scanf("%d", &Binary);
    Decimal = B_to_D(Binary);
    printf("Decimal of %d is %d", Binary, Decimal);
}