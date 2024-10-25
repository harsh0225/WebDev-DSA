/*Input:  arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
Output: 3 (1-> 3 -> 8 -> 9)
 
Explanation: Jump from 1st element to 
2nd element as there is only 1 step, 
now there are three options 5, 8 or 9. 
If 8 or 9 is chosen then the end node 9 
can be reached. So 3 jumps are made.
*/
#include<iostream>
using namespace std;
int jump(int arr[],int a,int ju1,int arr1[])
{
    int f=0;
    for(int i=0;i<a;i++)
    {
        if(arr[i]==ju1)
        {
            f++;
            break;
        }
    }
    if(f==0)
    {
        cout<<"the no is not found"<<endl;
    }
    return (f);
}
int main()
{
    int arr[]={1,2,3,4,5,6,7,8,9},arr1[10];
    int size=sizeof(arr)/sizeof(int),ju,l=0,no;
    while(1)
    {
        cout<<"jump = 1 \nEXIT = 2"<<endl;
        cin>>ju;
        switch(ju)
        {
            case 1:
            {
                cout<<"enter no you can jump it"<<endl;
                cin>>no;
                l=l+jump(arr,size,no,arr1);
                break;
            }    
            case 2:
            {
                cout<<"total jump is "<<l;
                exit(0);
            }    
        }
    }
    return 0;
}