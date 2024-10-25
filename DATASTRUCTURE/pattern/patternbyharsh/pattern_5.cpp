/*  
    print the following pattern
    1 2 3 4 5 5 4 3 2 1 
    1 2 3 4     4 3 2 1
    1 2 3         3 2 1
    1 2             2 1 
    1                 1
*/
#include<iostream>
using namespace std;
int main()
{
    for(int n=5;n>=1;n--)
    {
        for(int i=1;i<=n;i++)
        {
            cout<< i << " " ;
        }
        for(int j=5;j>n;j--)
        {
            cout << "  ";
        }
        for(int k=5;k>n;k--)
        {
            cout << "  ";
        }
        for(int l=n;l>=1;l--)
        {
            cout << l << " "; 
        }
        cout<<"\n";
    }   
}