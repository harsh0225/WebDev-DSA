// print the followig pattern 
/*       * * * *
         * * *
         * *
         * 
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = n;
    while (i >= 1 )
    {
        int j = i ;
        while (j >= 1)
        {
            cout << "*" << " " ;
            j--;
        }
        cout << endl;
        i--;
        
        
    }
    
}