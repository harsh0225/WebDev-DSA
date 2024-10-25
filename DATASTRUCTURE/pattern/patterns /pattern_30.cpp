// print the following pattern
/*
                        1 2 3 4 5 5 4 3 2 1
                        1 2 3 4 * * 4 3 2 1
                        1 2 3 * * * * 3 2 1
                        1 2 * * * * * * 2 1
                        1 * * * * * * * * 1
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
        int j =1;
        while (j<= n - i + 1)
        {
            cout << j << " ";
            j++;
        }
        int for_a = 1;
        int a = (n - n) + (for_a + 1);
        while (a<=i)
        {
            cout << "*" << " ";
            a++;
            for_a++;
        }
        int for_b = 1;
        int b = (n - n) + (for_b + 1);
        while (b<=i)
        {
            cout << "*" << " ";
            b++;
            for_b++;
        }
        int c = (n + 1) - i;
        while (c>=1)
        {
            cout << c << " ";
            c--;
        }     
        cout << endl;
        i++;
    }
    
}