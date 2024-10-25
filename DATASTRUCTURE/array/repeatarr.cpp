// write the program to find the element repeat / how many times

#include<iostream>
using namespace std;
void repeat(int arr[],int n)
{
    int t,r,p,i,j,q=0;
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            if(arr[j]>arr[i])
            {
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    for(i=0;i<n;i++)
    {
        cout<<arr[i]<<'\t';
    }
    for(i=0;i<n;i++)
    {
        r=0;        
        for(j=i+1;j<n;j++)
        {
            if(arr[i]==arr[j])
            {
                r++;
            }
        }
        if(arr[i]==q)
        {
            continue;
        }
        if(r>0)
        {
            q=arr[i];
            cout<<'\n'<<arr[i]<<" repeat = "<<r+1<<" times"<<endl;
        }
    }
}
int main()
{
    int arr[10],size;
    cout<<"how many element in array"<<endl;
    cin>>size;
    cout<<"enter array element"<<endl;
    for(int i=0;i<size;i++)
    {
        cin>>arr[i];
    }
    repeat(arr,size);
    return 0;
}