// print the following pattern
/*
                            1
                          2 3
                        4 5 6
                      7 8 9 10   
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = 1;
    int value = 1;
    while (i<=n)
    {
        int space = n - i;
        while (space >= 1)
        {
            cout << " " << " ";
            space--;
        }
        int j = 1;
        while (j<=i)
        {
            cout << value << " ";
            value++;
            j++;
        }
        cout << endl;
        i++;
    }
    
}