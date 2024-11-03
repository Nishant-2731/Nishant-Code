#include <stdio.h>
void display(int num, int temp)
{
    if (temp > num)
    {
        return;
    }
    else
    {
        printf("%d \n", temp);
        temp++;
        display(num, temp);
    }
}
int main()
{
    int x, y;
    printf("Enter the limit of number of which you want print counting: First Upper Limit and then Lower Limit respectively\n");
    scanf("%d \n %d", &x, &y);
    display(x, y);
    return 0;
}
