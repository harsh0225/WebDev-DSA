/*
Find the missing and repeating number

Input: arr[] = {3, 1, 3}
Output: Missing = 2, Repeating = 3
Explanation: In the array, 2 is missing and 3 occurs twice 

Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: Missing = 5, Repeating = 1

*/

void solve(int *arr,int *ptr,int size)
{
    int temp = 0;
    for(int i=0;i<size;i++)
    {
        temp = arr[i];
        ptr[temp] = ptr[temp] + 1;
    }
}

#include<iostream>
using namespace std;
int main()
{
    int arr[10] = {3,1,3};
    int size = 3;
    int *ptr = new int[size+1];
    for(int i=0;i<size+1;i++)
    {
        ptr[i] = 0;
    }
    solve(arr,ptr,size);
    for(int i=0;i<size+1;i++)
    {
        if(ptr[i] == 0)
        {
            cout<<"missing -> "<<i<<endl;
        }
        if(ptr[i]>1)
        {
            cout<<"repeting "<<i<<" -> "<<ptr[i]<<" times"<<endl;
        }
    }
    
}