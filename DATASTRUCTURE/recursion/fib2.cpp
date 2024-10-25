#include<iostream>
using namespace std;

/*void fibonacii(int first,int second,int n)
{
    int third = first + second;
    first = second;
    second = third;
    // base case
    if(n==0)
    {
        cout<<third;
        return;
    }
    fibonacii(first,second,n-1);
}

int main()
{
    int n;
    int first=0,second=1;
    cout<<"Enter value"<<endl;
    cin>>n;
    if(n==1 || n==2)
    {
        if(n==1)
        {
            cout<<first<<endl;
        }
        if(n==2)
        {
            cout<<second<<endl;
        }
    }
    else
    {
        fibonacii(first,second,n-3);
    }
    return 0;
} 
*/

int fib(int n)
{
    if(n==0)
    {
        return 0;
    }
    if(n==1)
    {
        return 1;
    }
    int ans = fib(n-1) + fib(n-2);
    return ans;
}
 

int main()
{
    int n;
    cout<<"Enter no "<<endl;
    cin>>n;
    cout<<fib(n)<<endl;
    return 0;
}


