/* print the following pattern
        1
       1 2
      1 2 3 
     1 2 3 4 
    1 2 3 4 5
 */

#include<iostream>
using namespace std;

int main()
{
    for(int n=1 ; n<=5 ; n++)
    {
        for(int i=5 ; i>=n ; i--)
        {
            cout << " " ;
        }
        for(int j=1 ; j<=n ; j++)
        {
            cout << j << " " ;
        }
        cout << "\n"  ;
    }
}