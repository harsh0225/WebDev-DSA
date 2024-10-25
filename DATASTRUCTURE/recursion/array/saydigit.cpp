#include<iostream>
using namespace std;

void saydigit(int n,string arr[])
{
    if(n==0)
    {
        return ;
    }
    int k=n%10;
    n=n/10;
    saydigit(n,arr);
    cout<<arr[k]<<"  ";   
}
int main()
{
    string arr[10]={"zero","one","two","three","four","five","six","seven","eight","nine"};
    int n;
    cout<<"enter no"<<endl;
    cin>>n;
    saydigit(n,arr);
    return 0;
}