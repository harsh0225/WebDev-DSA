// write the program to rotate cylindrical array
#include<iostream>
using namespace std;
int main()
{
    int a[10]={1,2,3,4,5},i,j,c,m;
    for(int k=0;k<20;k++)
    {
        j=3;
        c=a[4];
        for(i=4;i>=1;i--)
        {
            a[i]=a[j];
            j--;
        }
        a[0]=c;
        for(m=0;m<5;m++)
        {
            if(a[m]==5)
            {
                cout<<a[m]<<'\t';
            }
            else
            {
                cout<<"*"<<'\t';
            }
        }
        cout<<endl<<endl;  
    }  
}      