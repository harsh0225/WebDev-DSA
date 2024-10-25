/*
arr[5] = {1,2,3,4,5,6,7}
find square root of 36
*/
#include<iostream>
using namespace std;

int squareint(int arr[],int size,int num)
{
    int s = 0;
    int e = size - 1,mid,n,ans;
    while(s <= e)
    {
        mid = (s + e)/2;
        n = arr[mid] * arr[mid];
        if(n == num)
        {
            return mid;
        }
        if(n > num)
        {
            e = mid;
        }
        else
        {
            ans = mid;
            s = mid + 1;
        }
    }
    return arr[ans];
}


float sqrtdecimal(int n,int precision,int temp)
{
    float ans = temp;
    float deci=1;
    for(int i=0;i<precision;i++)
    {
        deci=deci/10;
        for(float j=ans;j*j<n;j=j+deci)
        {
            ans = j;
        }
    }
    return ans;
}


int main()
{
    int arr[5] = {1,2,3,4,6},s=5;
    int a1;
    cout<<"enter no for sqrt"<<endl;
    cin>>a1;
    float a = squareint(arr,s,a1);
    cout << a <<endl;
    cout << sqrtdecimal(a1,3,a);
    return 0;
}