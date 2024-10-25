// print the following pattern
/*
                                1
                              1 2 1
                            1 2 3 2 1
                          1 2 3 4 3 2 1      
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number ; ";
    cin >> n;
    int i = 1;
    while (i<=n)
    {
        //for space
        int space = n - i;
        while (space>=1)
        {
            cout << " " << " ";
            space--;
        }
        // for 1st triangle
        int j = 1 ;
        while (j<=i)
        {
            cout << j << " ";
            j++;
        }
        // for 2nd triange
        int a = i - 1;
        while(a>=1)
        {
            cout << a << " ";
            a--;
        }
        cout << endl;
        i++;
        
    }
    
}