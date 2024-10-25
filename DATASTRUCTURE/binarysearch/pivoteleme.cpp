/* find the pivot element in array
arr[5] = [7,9,1,2,3]
find = 1
*/
#include<iostream>
using namespace std;
/*int main()
{
    int arr[5]={7,9,10,1,2};
    int s = 0,e = s-1,mid,ans;
    while(s <= e)
    {
        mid = (s + e) / 2;
        if(arr[mid] < arr[mid+1] && arr[mid] < arr[mid-1])
        {
            ans = arr[mid];
        }
        else if(arr[mid] > arr[s])
        {
            s = mid + 1;
        }
        else
        {
            e = mid;
        }
    }
    cout << ans <<endl;
    return 0;

}*/

int pivot(int arr[],int size)
{
    int s=0;
    int e = size,mid;
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

int main()
{
    int arr[5]={6,7,1,2,3},size1=5,b;
    b=pivot(arr,size1);
    cout<<"pivot element is "<<arr[b]<<endl;
    return 0; 
}