#include <stdio.h>
void display(int temp, int num)
{
    if (temp < num)
    {
        return;
    }
    else
    {
        printf("%d \n", temp);
        temp--;
        display(temp, num);
    }
}
int main()
{
    int x, y;
    printf("Enter the limit of number of which you want print counting: First Upper Limit and then Lower Limit respectively\n");
    scanf("%d \n %d", &x, &y);
    printf("\n\n");
    display(x, y);
    return 0;
}
