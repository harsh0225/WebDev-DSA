/* write the program to find largest sub array sum
a[10]=(1,2,3,5,4,1,2,3,4,5)
large1=5
large2=5

5 to 5 element arr sum
*/
#include<iostream>
using namespace std;
int main()
{
    int a[10],i,n,sum=0,large=INT_MIN,t,ind1,p,j,ind2,c;
    cout<<"how many element add in array"<<endl;
    cin>>n;
    cout<<"enter array element"<<endl;
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }
    for(j=0;j<n;j++)
    {
        if(a[j]>t)
        {
            t=a[j];
            ind1=j;
        }
    }
    for(j=0;j<n;j++)
    {
        if(j==ind1)
        {
            continue;
        }
        if(a[j]>large)
        {
            large=a[j];
            p=a[j];
            ind2=j;
        }
    }
    if(ind1>ind2)
    {
        c=ind1;
        ind1=ind2;
        ind2=c;
    }
    for(j=ind1;j<=ind2;j++)
    {
        sum=sum+a[j];
    }
    cout<<'\n'<<sum<<endl;
}