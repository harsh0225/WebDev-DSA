// print the follwing pattern
/*
                1 1 1 1 
                  2 2 2
                    3 3
                      4
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = n ;
    int value = 1;
    while (i >= 1)
    {
        int space = n - i;
        while (space >= 1)
        {
            cout << " " << " ";
            space --;
        }
        int j = 1;
         while(j<=i)
         {
            cout << value << " ";
            j++;
         }
         cout << endl;
         value++;
         i--;
    }
    
}