/*
Input:
0 1 1 0
1 1 1 1
1 1 1 1
1 1 0 0
Output :
8
Explanation : 
The largest rectangle with only 1's is from 
(1, 0) to (2, 3) which is
1 1 1 1
1 1 1 1 

Input:
0 1 1
1 1 1
0 1 1      
Output:
6
Explanation : 
The largest rectangle with only 1's is from 
(0, 1) to (2, 2) which is
1 1
1 1
1 1
*/

#include<iostream>
using namespace std;
int find(int arr[][10],int findrow,int findcol,int row,int col)
{
    int countall=0;
    int countrec=0;
        for(int i=findrow;i<row;i++)
        {
            int flag=1,x=0;
            for(int j=findcol;j<col;j++)
            {
                if(arr[i][j] != arr[i][j+1] )
                {
                    flag=0;
                    break;
                }
            }
            if(flag==1)
            {
                countrec++;
            }
        }
        if(countrec>1)
        {
            return countrec*(col-findcol+1);
        }
        else
        {
            return -1;
        }
}
int rectangle(int arr[][10],int row,int col)
{
    int count=0;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            for(int k=col-1;k>j;k--)
            {
                int temp = find(arr,i,j,row,k);
                if(temp>count)
                {
                    count = temp;
                }
            }
        }
    }
    return count;
}    

int main()
{
    int arr[10][10];
   int row,col;
   cout<<"how many row"<<endl;
   cin>>row;
   cout<<"how many coloumn"<<endl;
   cin>>col;
   cout<<"Enter matrix"<<endl;
   for(int i=0;i<row;i++)
   {
        for(int j=0;j<col;j++)
        {
            cin>>arr[i][j];
        }
   }
   cout<<"rectangle -> "<< rectangle(arr,row,col)<<endl;
   return 0;
}

