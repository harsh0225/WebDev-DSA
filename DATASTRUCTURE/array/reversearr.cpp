#include<iostream>
using namespace std;


void reverse(int arr[],int size)
{
    int i = 0 , j = size-1;
    while(i <= j)
    {
        swap(arr[i] , arr[j]) ;
        i++ ;
        j-- ; 
    }
}


int main()
{
    int arr[10] , n ;
    cout << "how many element an array" << endl ;
    cin >> n;
    cout << "enter array element" << endl ;
    for(int i = 0 ; i < n ; i++)                //input arr
    {
        cin >> arr[i] ;
    }
    reverse(arr,n);                 //function for reverse an array
    for(int i = 0 ; i < n ; i++)
    {
        cout << arr[i] << "  " ;
    }
    return 0 ;
}