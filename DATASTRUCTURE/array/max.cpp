// FIND THE LARGEST ELEMENT IN ARRAY
#include<iostream>
using namespace std;

void maxi(int a[],int b)
{
    int t = INT_MIN;
    for(int i=0;i<b;i++)
    {
        if(t<a[i])
        {
            t=a[i];
        }
    }
    cout<<"largest element is  "<<t<<endl;
}

int main()
{
    int a[5],size=5;
    cout<<"enter array element"<<endl;
    for(int i=0;i<size;i++)
    {
        cin>>a[i];
    }
    maxi(a,size);
    return 0;
}