#include<iostream>
using namespace std;

inline int getMax(int a,int b)
{
    return (a>b) ? a : b;
}

int main()
{
    int a = 1 ,b = 2;
    int ans;
    ans = getMax(a,b);
    cout<<"greater number is-> "<<ans<<endl;
    return 0; 
}