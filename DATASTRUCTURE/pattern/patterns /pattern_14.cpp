// print the following pattern 
/*    
       A B C 
       A B C
       A B C
*/ 

#include<iostream>
using namespace std;
int main (){
    int n;
    cout << " Enter the number : " ;
    cin >> n;
    int i = 1;
    while (i<=n)
    {
        int j = 1;
        while (j<=n)
        {
            char a = 'A' + (j - 1);
            cout << a << " ";
            j++;
        }
        cout << endl;
        i++;

        
    }
    
}