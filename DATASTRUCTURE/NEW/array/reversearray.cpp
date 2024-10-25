// reverse the aaray

#include<iostream>
using namespace std;
void reverse(int a[],int n)
{
    int t,start=0,end=n-1;
    for(int i=0;i<=n;i++)
    {
        if(start<end)
        {
            t=a[start];
            a[start]=a[end];
            a[end]=t;
            start++;
            end--;
        }
    }
    /*cout<<"reverse array is\n\n"<<endl;
    for(int i=0;i<=n;i++)
    {
        cout<<a[i];
    }
    cout<<"\n\n";*/
}

int main()
{
    int a[10]={1,2,3,4,5,6,7,8,9,0},size=10;
    reverse(a,size);
    cout<<"reverse array is"<<endl<<endl;
    for(int i=0;i<size;i++)
    {
        cout<<a[i]<<"\t";
    }
    cout<<"\n\n";
}