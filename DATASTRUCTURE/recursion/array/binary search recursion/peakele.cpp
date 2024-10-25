#include<iostream>
using namespace std;

int peakelement(int *arr,int start,int end)
{
    int mid = start + (end - start)/2;
    if(arr[mid]>arr[mid+1] && arr[mid]>arr[mid-1])
    {
        return mid;
    }
    if(arr[mid]>arr[mid-1])
    {
        return peakelement(arr,mid,end);
    }
    else
    {
        return peakelement(arr,start,mid); 
    }
}

int main()
{
    int arr[10] = { 1,1,1,1,1,6,1,2,3};
    cout<<peakelement(arr,0,9);
    return 0;
}