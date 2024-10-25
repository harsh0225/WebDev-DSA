#include<iostream>
using namespace std;
int main()
{
    int a[3][3];
    cout<<"enter a matrix"<<endl;
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
    int flag=0,k;
    for(int i=0;i<3;i++)
    {
        if(flag==0)
        {
            k=0;
            while(k<3)
            {
                cout<<a[k][i]<<" ";
                k++;
            }
            flag=1;
        }
        else
        {
            k = 2;
            while(k>=0)
            {
                cout<<a[k][i]<<" ";
                k--;
            }
            flag=0;
        }
    }
    return 0;
}