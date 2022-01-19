#include<stdio.h>
int infinity=10000;
void printall(int a[5][5]);
int main()
{
    int n=5;
    int distanse[5][5]={{-1,10,infinity,infinity,5},
        {infinity,-1,1,infinity,2},
        {infinity,infinity,-1,4,infinity},
        {7,infinity,6,-1,infinity},
        {infinity,3,9,2,-1}};
        printall(distanse);
}
void printall(int a[5][5])
{
    int i,j,data,k;
    int n=5;
    printf("\t");
    for(i=0;i<=n-1;i++)
    printf("|%c|\t",i+'A');
    printf("\n");
    for(k=0;k<=9*n;k++)
    printf("-");
    printf("\n");
    for(i=0;i<=n-1;i++)
    {
        printf("|%c|\t",i+'A');
    for(j=0;j<=n-1;j++)
    {
        data= a[i][j];
        if(data>=infinity)
            printf("|inf|\t");
        else
        if(data==-1)
            printf("|-|\t");
        else
        printf("|%d|\t",data);
    }
    printf("\n");
       for(k=0;k<=9*n;k++)
    printf("-");
    printf("\n");
    }

}