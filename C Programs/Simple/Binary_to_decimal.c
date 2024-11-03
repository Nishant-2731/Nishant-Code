#include <stdio.h>
#include <math.h>
int main()
{
    int n, i = 0, x, r, temp, rev = 0, choice;
    printf("Select a function of choice :- \n");
    printf("Enter 1 to convert binary to decimal\n");
    printf("Enter 2 to convert decimal to binary\n");
    scanf("%d", &choice);
    switch (choice)
    {
    case 1:
        x = 0;
        printf("Enter a binary number : ");
        scanf("%d", &n);
        temp = n;
        while (temp > 0)
        {
            r = temp % 10;
            x = x + (r * pow(2, i));
            i = i + 1;
            temp = temp / 10;
        }
        printf("Decimal of %d is %d", n, x);
        break;
    case 2:
        x = 0;
        printf("Enter a decimal number : ");
        scanf("%d", &n);
        temp = n;
        while (temp > 0)
        {
            r = temp % 2;
            x = x * 10 + r;
            temp = temp / 2;
        }
        while (x > 0)
        {
            r = x % 10;
            rev = rev * 10 + r;
            x = x / 10;
        }
        printf("Binary of %d is %d", n, rev);
        break;
    }

    return 0;
}