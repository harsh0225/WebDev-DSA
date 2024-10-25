// print the follwoing pattern
/*
                             *
                           * *
                         * * *
                       * * * *    
*/

// #include<iostream>
// using namespace std;
// int main(){
//     int n;
//     cout << "Enter the number : ";
//     cin >> n;
//     int i = 1 ;
//     while (i<=n)
//     {
//         int space = n - i;
//         while (space >= 1 )
//         {
//             cout << " " << " " ;
//             space-- ;
//         }
//         int j = 1;
//         while (j <= i)
//         {
//             cout << "*" << " " ;
//             j++;
//         }
//         cout << endl;
//         i++;
        
//     }
    

// }


#include<iostream>
using namespace std;
int main (){
    int n;
    cout << "Enter the number : ";
    cin >> n ;
    int i = 1;
    while (i <= n)
    {
        int j = n - i + 1;
        while (j>=1)
        {
            cout << "*" << " ";
            j--;
        }
        cout << endl;
        i++;
    }
    
}