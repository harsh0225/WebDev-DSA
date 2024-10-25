#include<iostream>
using namespace std;
/*void unique(int arr[],int n)
{
    int  flag,b;
    for(int i=0;i<n;i++)
    {
        flag=0;
        for(int j=0;j<n;j++)
        {
            if(arr[i]==arr[j])
            {
                flag++;
            }
        }
        if(flag==1)
        {
            b=arr[i];
        }
    }
    cout<<"unique element is "<<b;
}

int main()
{
    int arr1[10],n;
    cout<<"how many element in array"<<endl;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>arr1[i];
    }
    unique(arr1,n);
}*/
/*using xor operator :-
        this operator is compare element and element is same then he will be zero that element*/

void unique(int arr[],int n)
{
    int ans=0;
    for(int i=0;i<n;i++)
    {
        ans=ans^arr[i];                 // xor = ^  // 5 ^ 5 ^ 4 = 4    5 ^ 5 = 0
    }
    cout<<"\n\nunique element is = "<<ans<<"\n\n";
}
int main()
{
    int a[5]={1,4,3,1,3},n=5;
    cout<<"how many element in array"<<endl;
    cin>>n;
    for(int i=0;i<n;i++)
    {
        cin>>a[i];
    }
    unique(a,n);
    return(0);
}