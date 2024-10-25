#include<iostream>
using namespace std;
int main()
{
    int arr[5]={1,0,1,0,1},n=5,t,i=0,j=4;
    while(i<n)
    {
        if(i>=j)
        {
            break;
        }
        if(arr[i]==0)
        {
            i++;
            continue;
        }
        if(arr[j]==1)
        {
            j--;
            continue;
        }
        if(arr[i]>arr[j])
        {
            t=arr[i];
            arr[i]=arr[j];
            arr[j]=t;
            i++;
            j--;
        }
    }
    for(int i=0;i<n;i++)
    {
        cout<<arr[i]<<'\t';
    }
    return(0);
}