/*
Find a Fixed Point (Value equal to index) in a given array

  Input: arr[] = {-10, -5, 0, 3, 7}
  Output: 3  // arr[3] == 3 

  Input: arr[] = {0, 2, 5, 8, 17}
  Output: 0  // arr[0] == 0 


  Input: arr[] = {-10, -5, 3, 4, 7, 9}
  Output: -1  // No Fixed Point
*/


#include<iostream>
using namespace std;
int fixpointindex(int *arr,int size)
{
    for(int i=0;i<size;i++)
    {
        if(arr[i] == i)
        {
            return arr[i];
        }
    }
    return -1;
}



int main()
{
    int arr[] = {-10, -5, 0, 3, 7};
    cout<<"fix index -> "<<fixpointindex(arr,5);
    return 0;
}