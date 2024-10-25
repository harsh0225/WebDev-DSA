
#include<iostream>
using namespace std;

void bubble_sort(int arr[],int size)
{
    int j,t,k;
    for(int i=size; i>0;i--)
    {
        k=0;
        bool swapped = false;
        while(k<i-1)
        {
            if(arr[k+1]<arr[k])
            {
                t=arr[k];
                arr[k]=arr[k+1];
                arr[k+1]=t;
                swapped = true;
            }
            k++;
        }
        if(swapped == false)
        {
            break;
        }    
    }
}

int main()
{
    int arr[5] = {1,5,4,3,2};
    bubble_sort(arr,5);
    for(int i=0;i<5;i++)
    {
        cout<<arr[i]<<"  ";
    }
    return 0;
}