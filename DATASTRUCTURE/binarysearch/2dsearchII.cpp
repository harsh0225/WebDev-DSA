/*
1   4   7   1    15
2   5   8   12   18
2   6   9   16   22
10  13  14  17   24
18  21  23  26   30

Write an efficient algorithm that searches for a value target 
in an m x n integer matrix matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
*/
#include<iostream>
using namespace std;
bool search_2d(int arr[][10],int target,int row,int col)
{
    int rowIndex = 0;
    int colIndex = col - 1;
    while(rowIndex < row && colIndex >= 0)
    {
        int element = arr[rowIndex][colIndex];
        if(element == target)
        {
            return 1;
        }
        else if(element > target)
        {
            colIndex--;
        }
        else
        {
            rowIndex++;
        }
    } 
    return 0;
}

int main()
{
    int arr[10][10];
    int row,col;
    cout<<"how many row"<<endl;
    cin>>row;
    cout<<"how many col"<<endl;
    cin>>col;

    // Input matrix
    
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>arr[i][j];
        }
    }
    
    // for printing matrix
    
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cout<<arr[i][j]<<"  ";
        }
        cout<<endl;
    }
    int target;
    cout<<"enter element which we can find"<<endl;
    cin>>target;
    if(search_2d(arr,target,row,col) == 1)
    {
        cout<<"matrix is found"<<endl;
    }
    else
    {
        cout<<"matrix is not found"<<endl;
    }
    return 0;
}

