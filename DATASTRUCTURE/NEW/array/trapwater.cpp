/* 
   input: arr[] = {2, 0, 2}
   Output: 2

Explanation: The structure is like below.
We can trap 2 units of water in the middle gap.
*/

int max(int a,int b)
{
    if(a>b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

int min(int a,int b)
{
    if(a<b)
    {
        return a;
    }
    else
    {
        return b;
    }
}

int trapwater(int arr[],int n)
{
    int left,right,res=0;
    for(int i = 1 ; i < n - 1 ; i++)
    {
        left = arr[i];
        for(int j = 0 ; j < i ; j++)
        {
            left = max (left , arr[j]) ;
        }
        right = arr[i] ;
        for(int j = i + 1 ; j < n ; j++)
        {
            right = max (right , arr[j]) ;
        }
        res = res + (min (left , right) - arr[i]) ;
    }
    return res ;
}

#include<iostream>
using namespace std;
int main()
{
    int arr[12] = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1 };
    cout << trapwater(arr,12) ;
    return 0;
}