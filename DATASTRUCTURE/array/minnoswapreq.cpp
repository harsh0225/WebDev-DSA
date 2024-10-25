/*
Input: {4, 3, 2, 1}
Output: 2
Explanation: Swap index 0 with 3 and 1 with 2 to 
              form the sorted array {1, 2, 3, 4}.

Input: {1, 5, 4, 3, 2}
Output: 2
*/
#include<iostream>
using namespace std;

int minnoswap(int *arr,int n)
{
    int count = 0;
    int min;
    int k;
    for(int i=0;i<n-1;i++)
    {
        min = arr[i];
        for(int j=i+1;j<n;j++)
        {
            if(arr[i] > arr[j])
            {   
                min = arr[j];
                k = j;
            }
        }
        if(min != arr[i])
        {
            swap(arr[i],arr[k]);
            count++;
        }
    }
    return count;
}


#include<iostream>
using namespace std;
int main()
{
    int arr1[] = {1, 5, 4, 3, 2};
    int n = sizeof(arr1) / sizeof(arr1[0]);
    int arr[10];
    for(int i=0;i<n;i++)
    {
        arr[i] = arr1[i];
    }
    cout<<minnoswap(arr,n)<<endl;
}