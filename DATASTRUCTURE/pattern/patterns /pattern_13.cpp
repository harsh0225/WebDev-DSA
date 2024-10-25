// print the following pattern 
/*

            A A A A
            B B B B
            C C C C
            D D D D



*/

#include<iostream>
using namespace std;
int main(){
    char n;
    cout << "Enter the character : ";
    cin >> n;
    int a = 1;
    char i = 'A';
    char b = 'A';
    while (i*a <= n)
    {
        char j = b;
        while (j*a <= n )
        {
            cout << i <<  " ";
            j++;
        }
        cout << endl;
        i++;
        
    }
    
}











// {
//     int n;
//     cout << "Enter the number : ";
//     cin >> n;
//     int i = 1;
//     char a = 'A';
//     while (i<=n)
//     {
//         int j = 1;
//         while (j<=n)
//         {
//             cout << a << " ";
//             j++;
//         }
//         cout << endl;
//         i++;
//         a++;
        
//     }
    

// }