/*

Find a pair with the given difference

Input: arr[] = {5, 20, 3, 2, 50, 80}, n = 78
Output: Pair Found: (2, 80)

Input: arr[] = {90, 70, 20, 80, 50}, n = 45
Output: No Such Pair
*/

#include<iostream>
using namespace std;

int greterminus(int *arr,int size,int key,int greter)
{
    for(int i=0;i<size;i++)
    {
        if(greter-arr[i] == key)
        {
            return arr[i];
        }
    }
    return -1;
}

int smallerplus(int *arr,int size,int key,int smaller)
{
    for(int i=0;i<size;i++)
    {
        if(smaller+arr[i] == key)
        {
            return arr[i];
        }
    }
    return -1;
}





int main()
{
    int arr[] = {5, 20, 3, 76, 2, 89}, n = 78;
    int size = 6,pair1,pair2;
    for(int i=0;i<n;i++)
    {
        if(arr[i]>78)
        {
            pair1 = greterminus(arr,6,78,arr[i]);
            if(pair1 == -1)
            {
                continue;
            }
            else
            {
                pair2 = arr[i];
                break;
            }    
        }
    }    
    if(pair1 != -1)
    {
        cout<<"pair is found -> ( "<<pair1<<" , "<<pair2<<" )"<<endl; 
    }
    else
    {
        if(pair1 == -1)
        {
            for(int i=0;i<n;i++)
            {
                pair1 = smallerplus(arr,6,78,arr[i]);
                if(pair1 == -1)
                {
                    continue;
                }
                else
                {
                    pair2 = arr[i];
                    break;
                } 
            }   
        }

        if(pair1 != -1)
        {
            cout<<"pair is found -> ( "<<pair1<<" , "<<pair2<<" )"<<endl; 
        }
        else
        {
            cout<<"pair is not found"<<endl;
        }
    }    
}

