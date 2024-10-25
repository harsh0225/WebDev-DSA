#include<iostream>
using namespace std;

void print(int *arr,int n)
{
    for(int i=0;i<n;i++)
    {
        cout<<arr[i];
    }
}



void merge(int *arr,int start,int end)
{
    int mid = start + (end - start)/2;
    int len1 = ( mid - start ) + 1 ;
    int len2 = end - mid;

    int *arr1 = new int[len1];
    int *arr2 = new int[len2];

    int firstindex = 0;
    int secondindex = 0;
    int mainindex = start;

    while(firstindex < len1)
    {
        arr1[firstindex++] = arr[mainindex++];
    }
    while(secondindex < len2)
    {
        arr2[secondindex++] = arr[mainindex++];
    }
    
    mainindex = start;
    firstindex = 0 ;
    secondindex = 0 ;
    
    while(firstindex < len1 && secondindex < len2)
    {
        if(arr1[firstindex] < arr2[secondindex])
        {
            arr[mainindex++] = arr1[firstindex++];
        }
        else
        {
            arr[mainindex++] = arr2[secondindex++];
        }
    }

    // copy remaining array

    while(firstindex < len1)
    {
        arr[mainindex++] = arr1[firstindex++];
    }
    while(secondindex < len2)
    {
        arr[mainindex++] = arr2[secondindex++];
    }
    delete []arr1;
    delete []arr2;
}

void mergeSort(int *arr,int start,int end)
{
    //base case
    if(start>=end)
    {
        return ;
    }
    int mid = start + (end - start)/2;
    // left part
    cout<<"firstcall"<<endl;
    mergeSort(arr,start,mid);

    // right part
    cout<<"secondcall"<<endl;
    mergeSort(arr,mid+1,end);
    cout<<start<<" . "<<end<<" . "<<mid<<endl;
    
    merge(arr,start,end);
}

int main()
{
    int arr[10] = {9,7,6,5,4};
    mergeSort(arr,0,5-1);
    for(int i=0;i<8;i++)
    {
        cout<<arr[i]<<" ";
    }
}

