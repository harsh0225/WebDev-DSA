#include<iostream>
using namespace std;

int left(int *arr,int key,int start,int end)
{
    int mid = start + (end - start)/2;
    if(start>end)
    {
        return 0;
    }
    if(arr[mid] == key && arr[mid-1] != key)
    {
        return mid;
    }
    if(arr[mid] == key)
    {
        return left(arr,key,start,mid);
    }
    else if(arr[mid]>key)
    {
        return left(arr,key,start,mid);
    }
    else
    {
        return left(arr,key,mid+1,end);
    }
}
int right(int *arr,int key,int start,int end)
{
    int mid = start + (end - start)/2;
    if(start>end)
    {
        return 0;
    }
    if(arr[mid] == key && arr[mid+1] != key)
    {
        return mid;
    }
    if(arr[mid] == key)
    {
        return right(arr,key,mid,end);
    }
    else if(arr[mid]>key)
    {
        return right(arr,key,start,mid);
    }
    else
    {
        return right(arr,key,mid+1,end);
    }
}
//arr[10] = {1,1,2,2,2,4,5,6,7,8,9,10,11} ;
int main()
{
    int arr[10] = {1 , 2 , 3 , 4 , 5 , 5 , 5};
    cout<<"left occure-> "<<left(arr,5,0,7)<<endl;
    cout<<"right occure-> "<<right(arr,5,0,7)<<endl;
    return 0;
}