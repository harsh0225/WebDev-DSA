/* first and last position of sorted array
i/p - arr = {1,1,2,2,2,3}
o/p - 2,4
*/
#include<iostream>
using namespace std;
int occleft(int arr[],int size,int key)
{
    int start = 0;
    int end = size-1, mid, ans;
    while(start <= end)
    {
        mid = (start+end)/2;
        if(arr[mid] == key)
        {
            ans = mid;                                  // 1  2  3  4  5  5  5
            end = mid - 1;
        }
        else if(arr[mid] < key)
        {
            start = mid+1;
        }
        else if(arr[mid] > key)
        {
            end = mid-1;
        }
    }
    return ans;
}

int occright(int arr[],int size,int key)
{
    int start = 0;
    int end = size-1, mid, ans;
    while(start <= end)
    {
        mid = (start+end)/2;
        if(arr[mid] == key)
        {
            ans = mid;                                  // 1  2  3  4  5  5  5
            start = mid+1;
        }
        else if(arr[mid] < key)
        {
            start = mid+1;
        }
        else if(arr[mid] > key)
        {
            end = mid-1;
        }
    }
    return ans;
}

int main()
{
    int arr[10] = {1,2,2,2,5,6,7,8,8,8};
    cout << occleft(arr,10,8)<<endl;
    cout << occright(arr,10,8)<<endl;    
}
