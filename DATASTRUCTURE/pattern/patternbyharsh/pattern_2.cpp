/*print the following patten

5 4 3 2 1
 5 4 3 2
  5 4 3
   5 4
    5
 */   


#include<iostream>
using namespace std;
int main()
{
    for(int n=1; n<=5; n++)
    {
        for(int i=5; i>=n; i--)
        {
            cout << i << " " ;
        }
        cout << "\n" ;
        for(int j=1; j<=n; j++)
        {
            cout << " " ;
        }
    }
}