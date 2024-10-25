/*
Input: ar1[] = {1, 5, 9, 10, 15, 20};
       ar2[] = {2, 3, 8, 13};
Output: ar1[] = {1, 2, 3, 5, 8, 9}
        ar2[] = {10, 13, 15, 20}
*/

#include<iostream>
using namespace std;

void mergesorted(int *arr1,int *arr2,int size1,int size2)
{
    int temp1=0,temp2=0;
    for(int i=0;i<size1;i++)
    {
        for(int j=0;j<size2;j++)
        {
            if(arr1[i] > arr2[j])
            {
                temp1 = arr1[i];
                temp2 = arr2[j];
                arr2[j] = temp1;
                arr1[i] = temp2;
            }
        }
    }
    for(int i=0;i<size2-1;i++)
    {
        for(int j=i+1;j<size2;j++)
        {
            if(arr2[j]<arr2[i])
                swap(arr2[i],arr2[j]);
        }
    }
}


int main()
{
    int arr1[] = {1, 5, 9, 10, 15, 20};
    int arr2[] = {2, 3, 8, 13};
    int size1 = 6 , size2 = 4;
    mergesorted(arr1,arr2,size1,size2);
    for(int i=0;i<size1;i++)
    {
        cout<<arr1[i]<<" ";
    }
    cout<<endl;
    for(int i=0;i<size2;i++)
    {
        cout<<arr2[i]<<" ";
    }
    cout<<endl;
    return 0;
}