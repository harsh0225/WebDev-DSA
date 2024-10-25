#include<iostream>
using namespace std;

int main()
{
    int arr1[5][5],arr2[5][5],arr3[5][5];
    int a,b,c,sum,size;
    cout<<"enter size of matrix"<<endl;
    cin>>size;

    cout<<"enter first array"<<endl;
    for(int i=0;i<size;i++)
    {
        for(int j=0;j<size;j++)
        {
            cin>>arr1[i][j];
        }
    }

    cout<<"enter second array"<<endl;
    for(int i=0;i<size;i++)
    {
        for(int j=0;j<size;j++)
        {
            cin>>arr2[i][j];
        }
    }

    for(int i=0;i<size;i++)
    {
        for(int j=0;j<size;j++)
        {
            sum=0;
            for(int k=0;k<size;k++)
            {
                a=arr1[i][k]*arr2[k][j];
                sum=sum+a;
            }   
            arr3[i][j]=sum;
        }
    }

    cout<<"multiplication array is"<<endl;
    for(int i=0;i<2;i++)
    {
        for(int j=0;j<2;j++)
        {
            cout<<arr3[i][j]<<"\t";
        }
        cout<<endl;
    }
    return 0;
}