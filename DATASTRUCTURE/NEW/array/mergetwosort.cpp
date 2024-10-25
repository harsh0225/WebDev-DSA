#include<iostream>
using namespace std;

void merge(int arr1[],int arr2[],int arr3[],int size1,int size2)
{
    int i=0,j=0,k=0;
    while(i<size1 && j<size2)
    {
        if(arr1[i]<arr2[j])
        {
            arr3[k] = arr1[i];
            i++;
        }
        else
        {
            arr3[k]=arr2[j];
            j++;
        }
        k++;
    }
    while(i<size1)
    {
        arr3[k]=arr1[i];
        k++;
        i++;
    }
    while(j<size2)
    {
        arr3[k]=arr2[j];
        j++;
        k++;
    }

}
int main()
{
    int arr1[5] = {1,3,5,7,9};
    int arr2[5] = {2,4,6,8,10};
    int arr3[20];
    merge(arr1,arr2,arr3,5,5);
    cout<<"merge array is-> "<<endl;
    for(int i=0;i<10;i++)
    {
        cout<<arr3[i]<<" ";
    }
    return 0;
}