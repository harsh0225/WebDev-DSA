/*Smallest subarray with sum greater than a given value

Examples:
arr[] = {1, 4, 45, 6, 0, 19}
   x  =  51
Output: 3
Minimum length subarray is {4, 45, 6}

arr[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Minimum length subarray is {10}

*/
#include<iostream>
using namespace std;
int main()
{
    int arr[6] = {1, 4, 45, 6, 0, 19},n=6,b,result=INT_MAX,k,j;
    int x = 51;
    for(int i=0;i<n;i++)
    {
        b=0;
        j=i;
        while(j<n)
        {
            b=b+arr[j];
            if(b>x)
            {
                k=(j-i)+1;
                if(k<result)
                {
                    result=k;
                }
                break;
            }
            j++;
        }
    }
    cout<<"minimum length of subarray  "<<result<<endl;;
    return 0;
}