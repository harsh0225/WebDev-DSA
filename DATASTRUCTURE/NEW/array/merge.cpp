/* merge two array

Input: arr1[] = { 1, 3, 4, 5}, arr2[] = {2, 4, 6, 8} 
Output: arr3[] = {1, 2, 3, 4, 4, 5, 6, 8} 
*/

#include<iostream>
using namespace std;

// merge function

void merge(int arr1[],int arr2[],int a,int b)
{
    int arr3[10],k=a+b,i=0,j=0;
    for(int l=0; a<k ; l++)
    {
        arr3[l]=arr1[i];
        l++;
        arr3[l]=arr2[j];
        i++;
        j++;
    }
    cout<<"merged array is"<<endl;
    for(i=0;i<k;i++)
    {
        cout<<arr3[i]<<"  ";
    }
}

// input function

void input(int arr[],int size)
{
    cout<<"enter array element"<<endl;
    for(int i=0;i<size;i++)
    {
        cin>>arr[i];
    }
}

int main()
{
    int arr1[10],arr2[10],n1,n2;
    cout<<"how many element in first array"<<endl;
    cin>>n1;
    input(arr1,n1);
    cout<<"how many element in second array"<<endl;
    cin>>n2;
    input(arr2,n2);
    merge(arr1,arr2,n1,n2);
    return(0);
}