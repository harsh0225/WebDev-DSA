/* find the element in rotated array 

arr[5] = {7,9,1,2,3} 
find = 2
*/
#include<iostream>
using namespace std;
int pivot(int arr[],int size)
{
    int s = 0, mid;
    int e = size - 1;
    while(s < e)
    {
        mid = (s + e) / 2;
        if(arr[mid] > arr[0])
        {
            s = mid + 1;
        }
        else
        {
            e = mid;
        }
    } 
    return s;
}
int find(int arr[],int size,int piv,int key)
{
    int s = 0;
    int e = size-1,mid;
    while(s <= e)
    {
        mid = (s + e) / 2;
        if(key == arr[mid])
        {
            return mid;
        }
        else if(key > arr[piv] && key < arr[0])
        {
            s = mid + 1;
        }
        else
        {
            e = mid;
        }
    }
    return -1;
}

int main()
{
    int arr[5]={7,9,1,2,3},s=5;
    int  b = pivot(arr,s);
    cout << find(arr,s,b,3)<<endl;
    return 0;
}