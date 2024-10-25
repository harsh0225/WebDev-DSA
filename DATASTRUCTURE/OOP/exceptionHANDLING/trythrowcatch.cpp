#include<iostream>
using namespace std;

int main()
{
    int  a,b;
    cout<<"enter any two no to find division"<<endl;
    cin>>a>>b;
    try
    {
        if(b == 0)
        {
            throw b;
        }
        cout<<"division is -> "<<a/b;
    }
    catch(float b)
    {
        cout<<"denomentor is zero "<<b<<endl;
    }
    catch(int b)
    {
        cout<<"denomenator is zero "<<b<<endl;
    }
}