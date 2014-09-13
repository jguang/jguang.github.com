 #include <stdio.h>
int main(void){
    int a=2,b=4,c=6,x,y;
    y=(x=a+b),(b+c);
    printf("y=%d;x=%d",y,x);
    return 0;
}
