#include<iostream>
using namespace std;
int main()
{
    int a[3][3];
    cout<<"Enter a matrix "<<endl;
    for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            cin>>a[i][j];
        }
    }
     for(int i=0;i<3;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout<<a[i][j]<<" ";
        }
        cout<<endl;
    }
    int count = 0;
    int total = 3*3;
    int startingrow=0;
    int startingcol=0;
    int endrow=3-1;
    int endcol=3-1;
    while(count<total)
    {
        for(int index=startingcol;index<=endcol;index++)
        {
            cout<<a[startingrow][index]<<" ";
            count++;
        }
        startingrow++;
        for(int index=startingrow;index<=endrow;index++)
        {
            cout<<a[index][endcol]<<" ";
            count++;
        }
        endcol--;
        for(int index=endcol;index>=startingcol;index--)
        {
            cout<<a[endrow][index]<<" ";
            count++;
        }
        endrow--;
        for(int index=endrow;index>=startingrow;index--)
        {
            cout<<a[index][startingcol]<<" ";
            count++;
        }
        startingcol++;
    }
    return 0;
}