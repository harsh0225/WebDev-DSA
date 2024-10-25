// print the following pattern 
/*
                        A
                        B C 
                        D E F 
                        J H I J
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i=1;
    char a = 'A';
    while (i<=n)
    {
        int j = 1;
        while (j<=i)
        {
            cout << a << " ";
            a++;
            j++;
        }
        cout << endl;
        i++;
    }
    
}