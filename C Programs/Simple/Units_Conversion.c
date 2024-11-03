#include <stdio.h>
int main(int argc, char const *argv[])
{
    int x;
    float a;
    printf("Enter the measurement that is to be converted\n");
    scanf("%f", &a);
    printf("The measurement before conversion %f \n", a);
    printf("Enter 1 for Kilometer to Miles conversion\n");
    printf("Enter 2 for Inches to Foot conversion\n");
    printf("Enter 3 for Centimeter to Inches conversion\n");
    printf("Enter 4 for Pound to Kilograms conversion\n");
    printf("Enter 5 for Inches to Meters conversion\n");
    printf("Enter 0 to Exit Conversion Program\n");
    printf("Select a option from above\n");
    scanf("%d", &x);
    switch (x)
    {
    case 1:
        printf("The converted measurement is %f miles", (a * 0.621371));
        break;
    case 2:
        printf("The converted measurement is %f Foot", (a * 0.0833333));
        break;
    case 3:
        printf("The converted measurement is %f Inches", (a * 0.393701));
        break;
    case 4:
        printf("The converted measurement is %f Kilograms", (a * 0.453592));
        break;
    case 5:
        printf("The converted measurement is %f Meters", (a * 0.0254));
        break;
    case 0:
        printf("Exiting Conversion Program.......");
        break;
    default:
        printf("No option is selected");
    }
    return 0;
}