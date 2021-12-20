#include<stdio.h>
typedef
struct {
    int i;
    float f;
}
mystruct;
int  main()
{
    mystruct ms1,ms2;

    printf("Read int \n");
    scanf("%d",&ms1.i);
    printf("Read float \n");
    scanf("%f",&ms1.f);
    printf("\nI = %d,F = %f",ms1.i,ms1.f);
    return 0;
}


