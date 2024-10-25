#include<iostream>
using namespace std;
int find_1s(int arr1[][10],int row,int col)
{
    int count,rowcnt=0,rowno;
    for(int i=0;i<row;i++)
    {
        count=0;
        for(int j=0;j<col;j++)
        {
            if(arr1[i][j]==1)
            {
                count++;
            }
        }
        if(rowcnt<count)
        {
            rowcnt = count;
            rowno=i;
        }
    }
    return rowno;
}

int main()
{
    int arr[10][10];
    int row,col;
    cout<<"enter row and coloumn"<<endl;
    cin>>row>>col;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>arr[i][j];
        }
    }
    cout<<"row is "<<find_1s(arr,row,col);
    return 0;
}