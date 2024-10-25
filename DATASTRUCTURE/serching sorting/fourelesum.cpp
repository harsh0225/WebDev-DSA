#include<iostream>
using namespace std;

void foursum(int *arr,int size,int key)
{
    int n = size;
    for(int i=0;i<n-3;i++)
    {
        for(int j=i+1;j<n-2;j++)
        {
            for(int k=j+1;k<n-1;k++)
            {
                for(int l=k+1;l<n;l++)
                {
                    if(arr[i]+arr[j]+arr[k]+arr[l] == key)
                    {
                        cout<<"element are found "<<arr[i]<<" "<<arr[j]<<" "<<arr[k]<<" "<<arr[l]<<endl;
                        return ;
                    }
                }
            }
        }
    }
    cout<<"element is not found"<<endl;
}



int main()
{
    int arr[10] =  {10, 20, 30, 40, 1, 2} , size = 6;
    foursum(arr,size,91);
    return 0;
}