// print the following pattern
/*
                A
                B C 
                C D E
                D E F G
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : " ;
    cin >> n;
    int i = 1;
    while (i<=n)
    {
        int j = 1;
        while (j<=i)
        {
            char a = 'A' + i + j - 2;
            cout << a << " ";
            j++;
        }
        cout << endl;
        i++;
        
    }
    
}