#include<iostream>
using namespace std;

int binarysearch(int arr[],int size,int key)
{
    int start = 0;
    int end = size - 1;
    int mid;
    
    while(start<=end)
    {
        mid = start + (end-start) / 2;         // eleme = 1  2  3  4  5 
        if(arr[mid] == key)                    // index = 0  1  2  3  4
        {
            return mid;
        }
        if(key>arr[mid])
        {
            start = mid + 1;
        }
        else
        {
            end = mid-1;
        }
    }
    return -1;
}

int main()
{
    int arr[10],n,key,find;
    cout << "how many element in an array" << endl;
    cin >> n;
    cout<<"enter array element" << endl;
    for(int i=0 ; i<n ; i++)
    {
        cin>>arr[i];
    }
    cout << "enter no which can you find" << endl;
    cin >> key;
    find = binarysearch(arr,n,key);
    cout << find << endl ;
    if(find != -1)
    {
        cout << "the no "<< key << " is "<< find << " th index" <<endl;
    }
    else
    {
        cout << "the no is not found" << endl;
    }    
    return 0;
}
