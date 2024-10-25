#include<iostream>
using namespace std;
void fibonacii(int first,int second,int n)
{
    int third=first+second;
    first=second;
    second=third;
    // base case
    if(third>n)
    {
        return ;
    }
    cout<<third<<"  ";
    //recursive call
    fibonacii(first,second,n);
}

int main()
{
    int first=0,second=1;
    int n;
    cout<<"Enter value of N"<<endl;
    cin>>n;
    cout<<"fibonacii series is"<<endl;
    fibonacii(first,second,n);
    return 0;
}