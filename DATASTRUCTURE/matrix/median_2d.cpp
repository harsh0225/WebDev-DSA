#include<iostream>
using namespace std;
int main()
{
    int a[10][10];
    int arr[50];
    //int arr[50];
    int row,col;
    cout<<"how many row"<<endl;
    cin>>row;
    cout<<"how many coloumn"<<endl;
    cin>>col;
    cout<<"enter matrix"<<endl;
    // input of matrix
    int k=0;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cin>>a[i][j];
            arr[k] = a[i][j];
            k++;
        }
    }
    // printing of matrix
    cout<<"entered matrix is"<<endl;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            cout<<a[i][j]<<"  ";
        }
        cout<<endl;
    }
    // sorting of array
    int temp;
    for(int i=0;i<row*col;i++)
    {
        for(int j=i+1;j<row*col;j++)
        {
            if(arr[i]>arr[j])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    
    /*int t;
    for(int i=0;i<row;i++)
    {
        for(int j=0;j<col;j++)
        {
            int l=j+1;
            for(int k=i;k<row;k++)
            {
                
                for( ;l<col;l++)
                {
                    if(a[i][j]>a[k][l])
                    {
                        t = a[i][j];
                        a[i][j]=a[k][l];
                        a[k][l]=t;
                    }
                }
                l=0;
            }
        }
    }*/
    temp = (row*col)/2;
    cout<<"median of matrix is -> "<<arr[temp]<<endl;
    return 0;
}
