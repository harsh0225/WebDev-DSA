//  find maximum element in array

#include<iostream>
using namespace std;

void maxi(int a[],int c)
{
    int i,j,t;
    for(i=0;i<c;i++)
    {
        for(j=1;j<c;j++)
        {
            if(a[i]<a[j])
            {
                t=a[j];
            }
        }
    }
    cout<<"\n"<<t<<"\n\n";
}
int main()
{
    int a[5],n=5,b;
    cout<<"enter element of an arry"<<endl;
    b=n;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    maxi(a,b);
}