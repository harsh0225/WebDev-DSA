/*
Input : arr[] = {7, 3, 2, 4, 9, 12, 56} , m = 3 
Output: Minimum Difference is 2 
Explanation:
We have seven packets of chocolates and we need to pick three packets for 3 students 
If we pick 2, 3 and 4, we get the minimum difference between maximum and minimum packet sizes.

Input : arr[] = {3, 4, 1, 9, 56, 7, 9, 12} , m = 5 
Output: Minimum Difference is 6 
*/
#include<iostream>
using namespace std;

void sort1(int arr[],int size)
{
    int temp;
    for(int i=0;i<size;i++)
    {
        temp = arr[i];
        int j=i-1;
        while(j>=0)
        {
            if(arr[j]>temp)
            {
                arr[j+1]=arr[j];
                j--;
            }
            else
            {
                break;
            }
        }
        arr[j+1]=temp;
    }
}
int main()
{
    int arr[8] = {7, 3, 2, 4, 9, 12, 56} , m = 3 ,n=7,b;
    int min = INT_MAX;
    sort1(arr,n);
    for(int i = 0,j=m-1; j < n;i++,j++)
    {
        b = arr[j] - arr[i];
        if(b < min)
        {
            min = b;
        }
    }
    cout<<"minimum difference is -> "<<min<<endl;            //2
    return 0;
}