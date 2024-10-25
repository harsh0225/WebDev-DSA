#include<iostream>
using namespace std;
 class A
 {
    int digit,n,sum;
    public:
        A()
        {
            cout<<"enter any no"<<endl;
            cin>>n;
        }
        friend void show(A t);
 };
 void show(A t)
 {
    t.sum = 0;
 }
 int main()
 {
    A obj;
    show(obj);
 }