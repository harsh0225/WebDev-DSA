/*
Input:
mat[4][5] = {{1, 2, 1, 4, 8},
             {3, 7, 8, 5, 1},
             {8, 7, 7, 3, 1},
             {8, 1, 2, 7, 9},
            };

Output: 
1 8 or 8 1
8 and 1 are present in all rows.
*/
#include<iostream>
using namespace std;
int common_row(int arr[][10],int row,int col,int findcol)
{
    int count=1;
    for(int i=1;i<row;i++)
    {
        int flag=0;
        for(int j=0;j<col;j++)
        {
            if(flag==1)
            {
                continue;
            }
            if(arr[0][findcol] == arr[i][j])
            {
                count++;
                flag=1;
            }
        }
    }
    if(count == 4)
    {
        return count;
    }
    else
    {
        return -1;
    }
}
int present(int arr[][10],int col)
{
    for(int i=0;i<col;i++)
    {
        if(arr[0][col]==arr[0][i])
        {
            return 0;
        }
    }
    return 1;
}
int main()
{
    int arr[10][10];
    int row,col;
    cout<<"how many row"<<endl;
    cin>>row;
    cout<<"how many col"<<endl;
    cin>>col;
    cout<<"enter matrix"<<endl;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>arr[i][j];
        }
    }
    for(int i=0;i<col;i++)
    {
        if(present(arr,i))
        {
            if(common_row(arr,row,col,i) == 4)
            {
                cout<<arr[0][i]<<"  ";
            }
        }
    }    
    return 0;
}