// tail recursion


#include<iostream>
using namespace std;

void print(long int n)
{
    // base case
    if(n==0)
    {
        return ;
    }
    cout<<n<<endl;
    print(n-1);
}

int main()
{
    long int n;
    cout<<"Enter no"<<endl;
    cin>>n;
    print(n);
    return 0;
}