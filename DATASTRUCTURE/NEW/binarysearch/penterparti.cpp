#include<iostream>
using namespace std;


int ispossible(int arr[],int size,int mid)
{
    int s=0,paintsum=0,painter=1;
    while(s < size)
    {
        if(paintsum + arr[s] <= mid)
        {
            paintsum = paintsum + arr[s];
            s++;
        }
        else
        {
            painter++;
            if(painter > 2)
            {
                return false;
            }
            paintsum = arr[s];
            s++;
        }
    }
    return true;
}


int binarysear(int arr[],int size)
{
    int sum=0;

    for(int i=0;i<size;i++)
    {
        sum=sum+arr[i];
    } 

    int s=0,e=sum,mid;

    while(s<=e)
    {
        mid = s+(e-s)/2;
        if(ispossible(arr,size,mid))
        {
            e=mid-1;
        }
        else
        {
            s=mid+1;
        }
    }
    return s;
}

int main()
{
    int arr[5] = {5,5,5,5},size=4;
    cout << binarysear(arr,size);
    return 0;
}