#include <stdio.h>
void swapping(int *a,int *b)
{
    *a = *a + *b;
    *b = *a - *b;
    *a = *a - *b;
}
int main()
{
    int x,y;
    printf("Enter two numbers for swapping :- \n");
    printf("x : ");
    scanf("%d", &x);
    printf("y : ");
    scanf("%d", &y);
    printf("Before Swapping :-\n");
    printf("x : %d\ny : %d\n",x,y);
    swapping(&x,&y);
    printf("After Swapping :-\n");
    printf("x : %d\ny : %d\n",x,y);
    return 0;
}