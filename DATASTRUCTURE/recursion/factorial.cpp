#include<iostream>
using namespace std;

int factorial(int n)
{
    // base case
    if(n == 0)
    {
        return 1;
    }
    int smallerproblem = factorial(n-1);
    int biggerproblem = smallerproblem * n;

    return biggerproblem;
}


int main()
{
    int n;
    cout<<"Enter no to find factorial"<<endl;
    cin>>n;
    cout<<factorial(n)<<endl;
    return 0;
}