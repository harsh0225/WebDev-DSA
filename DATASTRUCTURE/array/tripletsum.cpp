/*Input: array = {12, 3, 4, 1, 6, 9}, sum = 24; 
Output: 12, 3, 9 
Explanation: There is a triplet (12, 3 and 9) present 
in the array whose sum is 24. */
#include<iostream>
using namespace std;

int main()
{
    int arr[5]={1,2,3,4,5},sum=9,arr1[5],total,p=0;
    for(int i = 0; i < 5; i++)
    {
        for (int j = i+1; j < 5; j++)
        {
            for(int k = j+1; k < 5; k++)
            {
                if(arr[i]+arr[j]+arr[k]==sum)
                {
                    cout<<"triplet element is \t"<<arr[i]<<'\t'<<arr[j]<<'\t'<<arr[k]<<endl;;
                    exit (0);
                }
            }
        }
    }
    
}