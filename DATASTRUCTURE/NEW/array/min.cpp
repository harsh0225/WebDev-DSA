// FIND SMALLEST VALUE IN ARRAY
#include<iostream>
using namespace std;

void mini(int a[],int b)
{
    int t = INT_MAX;
    for(int i=0;i<b;i++)
    {
        if(t>a[i])
        {
            t = a[i];
        }
    }
    cout<<"smallest value in array is  "<<t;
}

int main()
{
    int a[5],size=5;
    cout<<"enter array element"<<endl;
    for(int j=0;j<size;j++)
    {
        cin>>a[j];
    }
    mini(a,size);
}