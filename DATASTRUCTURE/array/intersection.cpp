// intersection of two array with optimised solution
#include<iostream>
using namespace std;
void input(int arr[])
{
    int n;
    cout<<"how many element in array"<<endl;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>arr[i];
    }
}
void intersection(int arr[],int arr1[],int n1)
{
    int i=0,j=0;
    cout<<"intersection in array is"<<endl;
    while(i<n1)
    {
        if(arr[i]<arr1[j])
        {
            i++;
            continue;
        }
        if(arr[i]==arr1[j])
        {
            cout<<arr[i]<<'\t';
            i++;
            j++;
        }
        if(arr[i]>arr1[j])
        {
            j++;
        }
    }
}    
int main()
{
    int arr[5],arr1[5],n1=5;
    input(arr);
    input(arr1);
    intersection(arr,arr1,n1);
    return (0);
}