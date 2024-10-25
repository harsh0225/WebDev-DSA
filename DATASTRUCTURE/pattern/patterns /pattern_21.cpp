#include<iostream>
using namespace std;
int main(){
    int n;
    cout <<"Enter the number : ";
    cin >> n ;
    int i = 1;
    while (i<=n)
    {
        int j = 1;
        char a = 'C' - n + i ;
        while (j<=n)
        {
            
            cout << a << " " ;
            j ++ ;
            a++;

        }
        cout << endl;
        i++;
    }
    
}