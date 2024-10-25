#include<iostream>
using namespace std;

int partition(int *arr,int s,int e)
{
    int pivote = arr[s];

    int count = 0;
    for(int i=s+1 ; i<=e ; i++)
    {
        if(arr[i] < pivote)
        {
            count++;
        }
    }
    int pivoteindex = count+s;
    swap(arr[s],arr[pivoteindex]);

    int i=s,j=e;

    while(i<pivoteindex && j>pivoteindex)
    {
        while(arr[i]<=pivote)
        {
            i++;
        }
        while(arr[j]>pivote)
        {
            j--;
        }
        if(i<pivoteindex && j>pivoteindex)
        {
            swap(arr[i++],arr[j--]);
        }
    }

    return pivoteindex;
}

void quickSort(int *arr,int s,int e)
{
    // base case
    if(s>=e)
    {
        return ;
    }
    int p = partition(arr,s,e);

    // leftpart
    quickSort(arr,s,p-1);

    // right part

    quickSort(arr,p+1,e);

}


int main()
{
    int arr[10] = {5,4,3,2,1};

    quickSort(arr,0,4);

    for(int i=0;i<5;i++)
    {
        cout<<arr[i]<<" ";
    }
}