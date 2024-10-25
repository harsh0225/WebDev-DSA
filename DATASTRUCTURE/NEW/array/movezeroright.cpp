/* 
move zero right
i/p = arr[5] = {1,0,4,0,5}
o/p = 1 4 5 0 0 
*/

#include<iostream>
using namespace std;
/*void movezero(int arr[],int size)
{
    int i,temp;
    for(int j= size - 1 ; j >= 0 ; j--)
    {
        if(arr[j] == 0)
        {
            i = j;
            temp = arr[j];
            while(i < size)
            {
                arr[i] = arr[i+1];
                i++;
            }
            arr[size - 1] = temp;
            size--;
        }
    }
}*/
void movezero(int arr[],int size)
{
    int j=0;
    for(int i=0;i<size;i++)
    {
        if(arr[i]!=0)
        {
            swap(arr[i],arr[j]);
            j++;
        }
    }
}


void print(int arr[],int n)
{
    for(int i = 0 ; i < n ; i++)
    {
        cout << arr[i] << "  ";
    }
}
int main()
{
    int arr[5] = {1,0,0,0,5};
    movezero(arr,5);
    print(arr,5);
    cout << endl;
    return 0;
}