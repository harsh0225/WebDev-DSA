/*
arr[][] = { {0, 1, 2},
            {6, 4},
            {1, 7, 6, 8, 9},
            {5} 
          };
*/

#include<iostream>
using namespace std;
int main()
{
    int **arr = new int*[10];
    int arr1[10]={1,1,1,1,1,1,1,1,1,2};
    for(int i=0;i<10;i++)
    {
        arr[i] = new int[arr1[i]];
    }
    cout<<"Enter array element "<<endl;
    for(int i=0;i<10;i++)
    {
        for(int j=0;j<arr1[i];j++)
        {
            cin>>arr[i][j];
        }
    }
    for(int i=0;i<10;i++)
    {
        for(int j=0;j<arr1[i];j++)
        {
            cout<<arr[i][j]<<" ";
        }
    }
    return 0;
}
