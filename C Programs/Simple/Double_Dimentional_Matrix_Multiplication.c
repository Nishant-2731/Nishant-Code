#include <stdio.h>
int main()
{
    int n, i, j, k;
    printf("Enter the order of a double dimensional array : ");
    scanf("%d", &n);
    int S1[n][n], S2[n][n], A[n][n], M[n][n];
    printf("Enter the Elements of first array :- \n");
    for (i = 0; i < n; i++)
    {
        printf("Enter the elements of row %d\n", i + 1);
        for (j = 0; j < n; j++)
        {
            scanf("%d", &S1[i][j]);
        }
    }
    printf("Enter the Elements of second array :- \n");
    for (i = 0; i < n; i++)
    {
        printf("Enter the elements of row %d\n", i + 1);
        for (j = 0; j < n; j++)
        {
            scanf("%d", &S2[i][j]);
        }
    }
    printf("The input first double dimensional array :- \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            printf("%d ", S1[i][j]);
        }
        printf("\n");
    }
    printf("The input second double dimensional array :- \n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            printf("%d ", S2[i][j]);
        }
        printf("\n");
    }
    printf("Sum of the two matrix is :-\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            A[i][j] = S1[i][j] + S2[i][j];
            printf("%d ", A[i][j]);
        }
        printf("\n");
    }
    printf("Product of the two matrix is :-\n");
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            M[i][j] = 0;
            for (k = 0; k < n; k++)
            {
                M[i][j] = M[i][j] + (S1[i][k] * S2[k][j]);
            }
            printf("%d ", M[i][j]);
        }
        printf("\n");
    }
    return 0;
}