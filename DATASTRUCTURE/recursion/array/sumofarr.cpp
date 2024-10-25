#include<iostream>
using namespace std;

int sum(int arr[],int size)
{
    if(size==0)
    {
        return arr[0];
    }
    int ans = sum(arr,size-1);
    return ans+arr[size];
}
int main()
{
    int arr[10]={1,1,1,1,1,1,1,1,1,1};
    cout<<"addition is-> "<<sum(arr,10-1)<<endl;
    return 0;
}