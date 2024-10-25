#include<iostream>
using namespace std;
int main()
{
    for(int i=7;i<=10;i++)
    {
        for(int j=3;j>=i-6;j--)
        {
            cout<<"*";
        }
        cout<<"\n";     
    }
}
