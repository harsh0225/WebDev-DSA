/*  print the following patter
    5 5 5 5 5
     4 4 4 4
      3 3 3 
       2 2
        1
*/
#include<iostream>
using namespace std;
int main()
{
    for(int n=5;n>=1;n--)
    {
        for(int k=5;k>n;k--)
        {
            cout << " ";
        }
        for(int i=1;i<=n;i++)
        {
            cout << n << " " ;
        }
        cout<<"\n";
    }
}        