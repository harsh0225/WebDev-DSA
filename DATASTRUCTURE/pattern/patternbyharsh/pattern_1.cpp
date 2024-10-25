#include<iostream>
using namespace std;
int main()
{
    int n;
    for(n=1;n<=5;n++)
    {
        for(int i=5;i>=n;i--)
        {
            cout<< i << " " ;
        }
        cout << "\n" ;
    }
}