// print the follwing pattern 
/*
                  1 2 3 4
                    2 3 4
                      3 4
                        4

*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number :" ;
    cin >> n;
    int i = n; 
    int value = 1;
    while (i>=1)
    { 
        int space = n - i;
        while (space >= 1)
        {
            cout << " " << " ";
            space --;
        }
        int j = 1;
        int a = value;
        while (j<=i)
        {
            cout << a  << " ";
            a++;
            j++;
            
        }
        cout << endl;
        value ++;
        i--;
    }
    
}

