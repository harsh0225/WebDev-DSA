/*
    print the following pattern
    5 4 3 2 1 
     4 3 2 1
      3 2 1 
       2 1
        1
       
#include<iostream>
using namespace std;
int main()
{
    for(int n=5;n>=1;n--)
    {
        for(int i=5;i>n;i--)
        {
            cout<<" ";
        }
        for(int j=1;j<=n;j++)
        {
            cout<<j<<" ";
        }
        cout <<"\n";
    }
}
*/
/*

print the following pattern

5 4 3 2 1
 4 3 2 1
  3 2 1 
   2 1 
    1
*/    
#include<iostream>
using namespace std;
int main()
{
    for(int n=1;n<=5;n++)
    {
        for(int i=1;i<=n;i++)
        {
            cout<<" ";
        }
        for(int j=5;j>=n;j--)
        {
            cout<<j<<" ";
        }
        cout <<"\n";
    }
}