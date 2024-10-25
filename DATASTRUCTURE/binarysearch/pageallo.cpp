



#include<iostream>
using namespace std;
int ispossible(int arr[],int size,int mid)
{
    int pagesum=0,student=1;
    int s=0,e=size;
    while(s<e)
    {
        if(pagesum+arr[s] <= mid)
        {
            pagesum=pagesum+arr[s];
            s++;
        }
        else
        {
            student++;
            if(student>2)
            {
                return false;
            }
            pagesum=arr[s];
            s++;
        }
    }
    return true;
}
int bookallo(int arr[],int size)
{
    int sum=0;
    int ans = -1;
    for(int i=0;i<size;i++)
    {
        sum=sum+arr[i];   
    }
    
    int s=0 , e=sum , mid ;
    while(s<=e)
    {
        mid = s + (e-s)/2;
        if(ispossible(arr,size,mid))
        {
            e = mid - 1;
            ans = mid ;
        }
        else
        {
            s = mid + 1;
        }
    }
    return ans;
}

int main()
{
    int arr[6] = {10,20,30,40,50};
    cout << bookallo(arr,5);
    return 0;
}