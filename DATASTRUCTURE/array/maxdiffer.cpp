#include<iostream>
using namespace std;
void display(int b[],int k)
{
    for(int i=0;i<k;i++)
    {
        cout<<b[i]<<'\t';
    }
}
int main()
{
    int a[10],k=3,b[10],t,large;
    cout<<"enter array element"<<endl;
    for(int i=0;i<4;i++)
    {
        cin>>a[i];
    }
    for(int j=0;j<4;j++)
    {
        if(a[j]>9)
        {
            b[j]=a[j]-k;
        }
        else
        {
            b[j]=a[j]+k;
        }
    }
    display(b,4);
    for(int i=0;i<4;i++)
    {                                           //  7   9   4
        for(int j=0;j<4;j++)
        {
            if(b[j]>b[i])
            {
                t=b[j];
                b[j]=b[i];
                b[i]=t;
            }
        }   
    }
    cout<<"\n";
    t=INT_MIN;
    for(int i=3;i>0;i--)
    {
        for(int j=0;j<i;j++)
        {
            large=b[i]-b[j];
            if(t<large)
            {
                t=large;
            }
        }
    }
    cout<<'\n'<<"maximun diffrence is = "<<t;
    return 0;
}