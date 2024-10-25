// print the following output
/*              4 4 4 4 
                3 3 3 
                2 2
                1
*/
#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = n;
    while (i>=1)
    {
        int j = i;
        while (j>=1)
        {
            cout << i << " " ;
            j--;    
        }
        cout << endl;
        i--;
    }
    
}                