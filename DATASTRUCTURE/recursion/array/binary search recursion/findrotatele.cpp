#include<iostream>
using namespace std;
// arr = {7,9,11,12,13,14,15,1,3,4}
int pivotelement(int *arr,int start,int end)
{
    int mid = start + (end - start)/2;
    if(arr[mid] < arr[mid+1] && arr[mid] < arr[mid-1])
    {
        return mid;
    }
    
    if(arr[mid] > arr[0])
    {
        start = mid + 1;
        return pivotelement(arr,start,end);
    }
    else
    {
        end = mid;
        return pivotelement(arr,start,end);
    }
}

bool binarysearch(int *arr,int key,int start,int end)
{
    //base case
    bool remainingpart;
    if(start>end)
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
    int arr[10] = {7,9,1,3,4};
    int size = 5;
    int pivote = pivotelement(arr,0,size);
    int key;
    cout<<"enter key"<<endl;
    cin>>key;
    if(key >= arr[0])
    {
        cout<< "result is-> "<<binarysearch(arr,key,0,pivote)<<endl;
    }
    else
    {
        cout<<"result is-> "<<binarysearch(arr,key,pivote,size)<<endl;
    }
    return 0;
}