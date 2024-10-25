// print the follwong pattern
/*
                * * * *
                  * * *
                    * *
                      *


*/

#include<iostream>
using namespace std;
int main (){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = n ;
    while (i>=1)
    {
        int space = n - i ;
        while (space >= 1 )
        {
            cout << " " << " ";
            space --;
        }
        int j = 1;
        while (j<=i)
        {
            cout << "*" << " ";
            j++;
        }
        cout << endl;
        i--;
        
        
    }
    
}