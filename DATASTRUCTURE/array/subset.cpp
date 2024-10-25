/* FIND first ARRAY is subset of second ARRAY (using binary search)
Input: arr1[] = {11, 1, 13, 21, 3, 7}, arr2[] = {11, 3, 7, 1} 
Output: arr2[] is a subset of arr1[]
*/
#include<iostream>
using namespace std;
int binary(int arr[],int size,int key)
{
    int s=0;
    int e=size,mid;
    while(s<=e)
    {
        mid=s+(e-s)/2;
        if(arr[mid]==key)
        {
            return true;
        }
        if(arr[mid]>key)
        {
            e=mid-1;
        }
        else
        {
            s=mid+1;
        }
    }
    return false;
}
int main()
{
    int arr[5]={1,2,3,4,5},arr1[2]={1,2};
    int t=0;
    for(int i=0;i<2;i++)
    {
        
        if(binary(arr,5,arr1[i]))
        {
            t=0;
        }
        else
        {
            t=1;
        }
    }
    if(t==0)
    {
        cout<<"arr1 is subset arr"<<endl;
    }
    else
    {
        cout<<"arr1 is not subset of arr"<<endl;
    }
    return 0;
}