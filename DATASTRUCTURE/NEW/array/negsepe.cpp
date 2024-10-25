// seperate negtive element in one side
//   input = -33,-3,-56,45,-56,34
//   output = -56,-56,-33,-3,34,45


#include<iostream>
using namespace std;

void seperate(int a[],int b)
{
    int t = INT_MIN;
    for(int i=0;i<b;i++)
    {
        for(int j=0;j<b;j++)
        {
            if(a[i]<a[j])
            {
                t = a[i];
                a[i]=a[j];
                a[j]=t;
            }
        }
    }
    for(int i=0;i<b;i++)
    {
        cout<<a[i]<<"\t";
    }
}


int main()
{
    int a[5],size=5;
    cout<<"enter array element"<<endl;
    for(int i=0;i<size;i++)
    {
        cin>>a[i];
    }
    seperate(a,size);
}