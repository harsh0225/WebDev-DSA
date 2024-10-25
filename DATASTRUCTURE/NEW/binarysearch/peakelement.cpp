/* find the peak element in array
arr = {1,2,3,5,6,7,8,3,2,1}
find = 8
*/
#include<iostream>
using namespace std;
/*
int peak(int arr[],int size)
{
    int start=0;
    int end=size-1,mid,ans;
    while(start<=end)
    {
        mid = (start+end)/2;
        if(arr[mid] > arr[mid+1] && arr[mid]>arr[mid-1])
        {
            ans=arr[mid];
            return (ans);
        }
        else if(arr[mid] < arr[mid+1])
        {
            start = mid+1;
        }
        else if(arr[mid] > arr[mid+1])
        {
            end = mid - 1; 
        }
    }
    return -1;
}*/
int peak(int arr[],int size)
{
    int s = 0;
    int e = size - 1, mid, ans;
    while(s <= e)
    {
        mid = (s + e) / 2;
        if(arr[mid] > arr[mid + 1])
        {
            e = mid - 1;
            ans = mid ;
        }
        else
        {
            s = mid + 1 ;
        }
    }
    return (ans);
}


int main()
{
    int arr[9] = {1,2,3,4,5,6,3,2,1};
    cout<<peak(arr,9);
    return (0);
}