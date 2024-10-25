// sorting the array
#include<iostream>
using namespace std;


void sort1(int a[],int d)
{
    int t;
    for(int i=0;i<d;i++)
    {
        for(int j=i+1;j<d;j++)
        {
            if(a[i]>a[j])
            {
                t=a[i];
                a[i]=a[j];
                a[j]=t;
            }
        }
    }
}

int main()
{
    int a[5],n=5;
    cout<<"enter array element"<<endl;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    sort1(a,n);
    for(int i=0;i<n;i++)
    {
        cout<<a[i]<<"\t";
    }
}