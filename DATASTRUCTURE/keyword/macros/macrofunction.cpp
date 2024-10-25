#include<iostream>
using namespace std;
#define AREA(l,b) (l*b)

int main()
{
    int len,bre;
    cout<<"enter length and breadth"<<endl;
    cin>>len>>bre;
    cout<<"area of rectangle is -> "<<AREA(len,bre)<<endl;
    return 0;
}
