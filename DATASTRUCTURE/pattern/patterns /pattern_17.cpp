// print the following pattern
/*
            A 
            B B
            C C C
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = 1;
    while (i<=n)
    {
        int j = 1;
        while (j<=i)
        {
            char a = 'A' + i - 1;
            cout << a << " ";
            j++;
        }
        cout << endl;
        i++;
    }
    
}