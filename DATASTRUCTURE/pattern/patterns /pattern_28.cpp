// print the following pattern 
/*
                            1 
                          1 2 3
                        1 2 3 4 5
                      1 2 3 4 5 6 7
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = 1;
    while (i <= n){
        int space = n - i;
        while(space >= 1)
        {
            cout << " " << " ";
            space--;
        }
        int j = 1;
        int a = (1*i)*2-1;
        while(j<=a)
        {
            cout << j << " ";
            j++;
        }
        cout << endl;
        i++;
    }

}