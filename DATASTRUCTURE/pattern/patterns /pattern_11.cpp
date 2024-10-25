// print the following pattern
/*       1
         2 3
         3 4 5
         6 7 8
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i=1;
    while (i<=n)
     {
        int j = 1;
        while (j<=i)
        {
            cout << (i+j) - 1 << " ";
            j++;
        }
        cout << endl;
        i++;
    }
   

}        
    // {
    //     int j = 1;
    //     int value = i;
    //     while (j<=i)
    //     {
            
    //         cout << value << " ";
    //         value ++;
    //         j++;
    //     }
    //     cout << endl;
    //     i++;
    // }



    //  {
    //     int j = 1;
    //     int value = a; 
    //     while (j<=i)
    //     {
    //         cout << value << " ";
    //         value++;
    //         j++;
    //     }
    //     cout << endl;
    //     i++;
    //     a++;
    // }