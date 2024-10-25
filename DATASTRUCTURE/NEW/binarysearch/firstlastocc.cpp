#include<iostream>
using namespace std;

int firstocc(int *arr,int start,int end,int x)
{
    // base codition 
    if(start > end)
    {
        return 0;
    }
    
    int mid = start + (end-start)/2;
    if(arr[mid] == x && arr[mid-1] < x)
    {
        return mid;
    }
    else if(x > arr[mid])
    {
        return firstocc(arr,mid+1,end,x);
    }
    else
    {
        return firstocc(arr,start,mid-1,x);
    }
}


int lastocc(int *arr,int start,int end,int x)
{
    // base codition 
    if(start > end)
    {
        return 0;
    }
    
    int mid = start + (end-start)/2;
    if(arr[mid] == x && arr[mid+1] > x)
    {
        return mid;
    }
    else if(x < arr[mid])
    {
        return lastocc(arr,start,mid-1,x);
    }
    else
    {
        return lastocc(arr,mid+1,end,x);
    }
}

int main()
{
    int arr[10]={1,2,3,4,5,5,5,5,9,10};
    int n = 10;
    int x=5;
    cout<<"first occurence -> "<<firstocc(arr,0,n,x)<<endl;
    cout<<"last occurence -> "<<lastocc(arr,0,n,x);
    return 0;
}