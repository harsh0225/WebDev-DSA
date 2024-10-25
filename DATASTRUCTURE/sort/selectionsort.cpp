// copare n element in n element 

#include<iostream>
using namespace std;
void selection_sort(int arr[],int size)
{
    int t;
    for(int i=0;i<size;i++)
    {
        for(int j=i+1;j<size;j++)
        {
            if(arr[i]>arr[j])
            {
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
}


int main()
{
    int arr[5]={9,8,7,6,5};
    selection_sort(arr,5);
    cout<<endl;
    for(int i=0;i<5;i++)
    {
        cout<<arr[i]<<"  ";
    }
    cout<<endl<<endl;
    return 0;
}