// print the following pattern 
/*
        A B C D
        B C D E
        C D E F
        D E F J
*/

#include<iostream>
using namespace std;
int main(){
    int n ;
    cout << "Enter the number : ";
    cin >> n;
    int i = 1;
    while (i<=n)
    {
        int j = 1;
        char a ='A' + i - 1 ;
        while (j<=n)
        {
            cout << a << " ";
            a++;
            j++;
        }
        cout << endl;
        i++;
    }
    
}