#include<iostream>
using namespace std;

bool linearsearch(int *arr,int key,int size)
{
    if(size==0)
    {
        return false;
    }
    if(arr[0]==key)
    {
        return true;
    }
    else
    {
        bool remainingpart = linearsearch(arr+1,key,size-1);
        return remainingpart;
    }
}


int main()
{
    int arr[10] = {3,4,7,8,0,2,1,18,54,23};
    int key,size=10;
    cout<<"Enter key which want tou find"<<endl;
    cin>>key;
    (linearsearch(arr,key,size)==1) ? (cout<<"element is found") : (cout<<"element is not found");
    return 0;
}