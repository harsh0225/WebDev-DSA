#include<iostream>
using namespace std;

int ispossible(int arr[],int size,int mid,int max)
{
    for(int i=0;i<size;i++)
    {
        if(max-arr[i]>=mid)
        {
            return true;
        }
    }
    return false;
}

int agree_cow(int arr[],int size)
{
    int t;
    // for sorting 
    for(int i=0;i<size;i++)
    {
        for(int j=i+1;j<size;j++)
        {
            if(arr[i]>arr[j])
            {
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    // for maximum
    int max = arr[size-1];
    int s=0;
    int e=max,mid,ans=-1;
    while(s<=e)
    {
        mid = s+(e-s)/2;
        if(ispossible(arr,size,mid,max))
        {
            ans=mid;
            s=mid+1;
        }
        else
        {
            e=mid-1;
        }
    }
    return ans;
}
int main()
{
    int arr[5]={4,3,2,1,6};
    cout<<agree_cow(arr,5)<<endl;
    return 0;
}