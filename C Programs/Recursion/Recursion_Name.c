#include <stdio.h>
void display(int num)
{
    if (num == 0)
    {
        return;
    }
    else
    {
        printf("NISHANT KUMAR\n");
        num--;
        display(num);
    }
}
int main()
{
    int x;
    printf("Enter the number times you want to print your name\n");
    scanf("%d", &x);
    display(x);
    return 0;
}
