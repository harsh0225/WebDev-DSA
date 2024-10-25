#include<iostream>
using namespace std;

bool checksort(int *arr,int size)
{
    if(size == 0 || size == 1)
    {
        return true;
    }
    if(arr[0]>arr[1])
    {
        return false;
    }
    else
    {
        bool ans=checksort(arr+1,size-1);
        return ans;
    }

}   

int main()
{
    int arr[10] = {0,1,2,3,4,5,6,7,8,9};
    int size=10;
    if(true==checksort(arr,size))
    {
        cout<<"array is sorted"<<endl;
    }
    else
    {
        cout<<"array is not sorted"<<endl;
    }
    return 0;
}