#include<iostream>
using namespace std;

bool binarysearch(int *arr,int key,int start,int end)
{
    //base case
    bool remainingpart;
    if(start>=end)
    {
        return false;
    }
    int mid=start+(end-start)/2;
    if(arr[mid] == key)
    {
        return true;
    }
    else if(arr[mid] > key)
    {
        end = mid-1;
        remainingpart = binarysearch(arr,key,start,end);
    }
    else
    {
        start = mid+1;
        remainingpart = binarysearch(arr,key,start,end);
    }
    return remainingpart;
}

int main()
{
    int arr[10] = {2,3,4,5,6,7,8,9,11,12};
    int key,size=10;
    cout<<"Enter element which you can find"<<endl;
    cin>>key;
    cout<<"result is-> "<<binarysearch(arr,key,0,size);
    return 0;
}


/*
// SECOND OPTION
int binarysearch(int *arr,int key,int start,int end)
{
    // base case
    if(start>=end)
    {
        return false;
    }
    int mid = start + (end - start)/2;
    if(ar[mid] == key)
    {
        return true;
    }
    else if(arr[mid]<key)
    {
        start = mid + 1;
        return binarysearch(arr,key,start,end);
    }
    else
    {
        end = mid - 1;
        return binarysearch(arr,key,start,end);
    }
}
*/