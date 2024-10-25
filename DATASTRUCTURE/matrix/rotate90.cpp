#include<iostream>
using namespace std;
int main()
{
    int dimen;
    int a[10][10],b[10][10];
    cout<<"Enter diamention of matrix"<<endl;
    cin>>dimen;
    int temp = dimen;
    for(int i=0;i<dimen;i++)
    {
        for(int j=0;j<dimen;j++)
        {
            cin>>a[i][j];
        }
    }
    cout<<"entered matrix is"<<endl;
    for(int i=0;i<dimen;i++)
    {
        for(int j=0;j<dimen;j++)
        {
            cout<<a[i][j]<<"  ";
        }
        cout<<endl;
    }
    int total = dimen*dimen;
    int start=0;
    dimen = dimen - 1;


    for(int k=0;k<=total+1;k++)
    {
        // for first row
        for(int i=start;i<=dimen;i++)
        {
            b[i][dimen] = a[start][i];
            total--;
        }
        // for end col
        int end = dimen - 1;
        for(int i=start + 1;i<=dimen;i++)
        {
            b[dimen][end] = a[i][dimen];
            end--;
            total--;
        }
        // for end row
        for(int i = dimen - 1 ; i>=start ; i--)
        {
            b[i][start] = a[dimen][i];
            total--;
        }
        // for first col
        int s = start+1;
        for(int i = dimen - 1; i >= start ;i--)
        {
            b[start][s] = a[i][start];
            s++; 
            total--;
        } 
        dimen--;
        start++;
    }


    cout<<"rotated matrix is"<<endl;
    for(int i=0;i<temp;i++)
    {
        for(int j=0;j<temp;j++)
        {
            cout<<b[i][j]<<"  ";
        }
        cout<<endl;
    }
    return 0;
}
