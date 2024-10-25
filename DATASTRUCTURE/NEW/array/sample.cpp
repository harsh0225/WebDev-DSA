#include<iostream>
using namespace std;

void add(int *p)
{
    *p=10;
}
int main()
{
    int a;
    add(&a);
    cout<<a;
}