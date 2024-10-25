/* print the following patter
                1
               1 2
              1 2 3 
             1 2 3 4
            1 2 3 4 5
           1 2 3 4 5 6 
          1 2 3 4 5 6 8 
         1 2 3 4 5 6 7 8
        1 2 3 4 5 6 7 8 9
              1 2 3 
              1 2 3
              1 2 3
 */
#include<iostream>
using namespace std;
int main()
{
    for(int n=1;n<=9;n++)
    {
        for(int i=9;i>n;i--)
        {
            cout<< " " ;
        }
        for(int j=1;j<=n;j++)
        {
            cout << j << " ";
        }
        cout<<"\n";
        
    }
    for(int k=3;k>=1;k--)
    {
        for(int l=6;l>=1;l--)
        {
            cout<<" ";
        }
        for(int m=3;m>=1;m--)
        {
            cout<<m<<" ";
        }
        cout<<"\n";
    }
}                                 