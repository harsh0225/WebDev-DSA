// print the following pattern
/*
                D
                C D
                B C D
                A B C D
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
        char a = 'A' + n - i;
        while (j<=i)
        {  
            cout << a << " ";
            j++;
            a++;
        }
        cout << endl;
        i++;
    }
    
}