/*

Find the Minimum element in a Sorted and Rotated Array

Input: arr[] = {5, 6, 1, 2, 3, 4}
Output: 1
Explanation: 1 is the minimum element present in the array.

Input: arr[] = {1, 2, 3, 4}
Output: 1
*/


// USING BINARY SEARCH

#include<iostream>
using namespace std;

int pivoteele(int *arr,int size)
{
    int start = 0;
    int end = size ,mid;
    while(start < end)
    {
        mid = start + (end - start) / 2;
        if(arr[mid] < arr [mid -1] && arr[mid] < arr[mid+1])
        {
            return mid;
        }
        if(arr[mid] > arr[0])
        {
            start = mid+1;
        }
        else
        {
            end = mid;
        }
    }
    return -1;
}



int main()
{
    int arr[] = {5, 6, 7, 8, 1, 2, 3, 4};
    int size = sizeof(arr) / sizeof(arr[0]);
    cout<<"pivote element is -> "<<pivoteele(arr,size);
    return 0;
}