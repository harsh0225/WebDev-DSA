//print the following pattern
/*
                A B C D
                E F G H
                I J K L
                M N O P 
*/
#include<iostream>
using namespace std;
int main (){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = 1;
    char a = 'A';
    while (i<=n)
    {  
        int j = 1;
        while (j<=n)
        {
            cout << a << " ";
            j++;
            a++;
        }
        cout << endl;
        i++;
        
    }
    
}