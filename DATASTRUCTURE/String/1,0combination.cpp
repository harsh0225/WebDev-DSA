/*Input: str = “0100110101” 
Output: 4 
The required substrings are “01”, “0011”, “01” and “01”.
Input: str = “0111100010” 
Output: 3 

Input: str = “0000000000” 

*/
#include<iostream>
using namespace std;
int combination(char arr[])
{
    int one = 0, zero = 0 , count =0;
    for(int i=0;arr[i] != '\0';i++)
    {
        if(arr[i] == '1')
        {
            one++;
        }
        else
        {
            zero++;
        }
        if(one > 0)
        {
            if(one == zero)
            {
                count++;
                one = 0;
                zero =0;
            }
        }
    }
    return count;
}


int main()
{
    char a[15];
    cout<<"Enter binary no"<<endl;
    cin>>a;
    int k=combination(a);
    if(k>0)
    {
        cout<<"combination is "<<k<<endl;
    }
    else
    {
        cout<<"combination is not present"<<endl;
    }
    return 0;
}