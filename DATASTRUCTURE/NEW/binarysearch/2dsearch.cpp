#include<iostream>
using namespace std;
int search_2d(int a[][6],int target,int row,int col)
{
    int start = 0;
    int end = (row * col) - 1;
    int mid = start + (end - start)/2;
    while(start<=end)
    {
        int r = mid/col;                    // for find column
        int c = mid%col;                    // for find column
        int element = a[r][c];
        if(element == target)
        {
            return mid;
        }
        else if(target > element)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
        mid = start + (end - start)/2;
    }
    return -1;
}
int main()
{
    int arr[6][6];
    int row,col;
    cout<<"how many rows "<<endl;
    cin>>row;
    cout<<"how many col"<<endl;
    cin>>col;

    // for input 2d martix

    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>arr[i][j];
        }
    }

    // for printing matrix

    cout<<"enter matrix is"<<endl;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cout<<arr[i][j]<<"  ";
        }
        cout<<endl;
    }
    int target;
    cout<<"Enter element which we can find"<<endl;
    cin>>target;

    int mid = search_2d(arr,target,row,col);

    if(mid == -1)
    {
        cout<<"targt is not found "<<endl;
    }
    else
    {
        cout<<"target is found at \nrow = "<<mid/col<<"\ncolumn = "<<mid%col<<endl;
    }
    return 0;
}