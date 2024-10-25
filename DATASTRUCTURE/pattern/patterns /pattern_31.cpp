// print the following pattern 
/*
            1 1 1 1 1 1 1 1 - 2 2 2 2 2 2 2 2       1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1   
            1 1 1 1 1 1 1       2 2 2 2 2 2 2       1 1 1   1 1 1 1 1 1 1 1 1 1 1 1 1 1   1 1 1
            1 1 1 1 1 1           2 2 2 2 2 2       1 1 1     1 1 1 1 1 1 1 1 1 1 1 1     1 1 1 
            1 1 1 1 1               2 2 2 2 2       1 1 1       1 1 1 1 1 1 1 1 1 1       1 1 1                                  
            1 1 1 1                   2 2 2 2       1 1 1         1 1 1 1 1 1 1 1         1 1 1
            1 1 1                       2 2 2       1 1 1           1 1 1 1 1 1           1 1 1
            1 1                           2 2       1 1 1             1 1 1 1             1 1 1
            1                               2       1 1 1               1 1               1 1 1
            1                               2       1 1 1                                 1 1 1
            1 1                           2 2       1 1 1                                 1 1 1
            1 1 1                       2 2 2       1 1 1                                 1 1 1 
            1 1 1 1                   2 2 2 2       1 1 1                                 1 1 1
            1 1 1 1 1               2 2 2 2 2       1 1 1                                 1 1 1
            1 1 1 1 1 1           2 2 2 2 2 2       1 1 1                                 1 1 1
            1 1 1 1 1 1 1       2 2 2 2 2 2 2       1 1 1                                 1 1 1
            1 1 1 1 1 1 1 1 - 2 2 2 2 2 2 2 2       1 1 1                                 1 1 1
*/

#include<iostream>
using namespace std;
int main(){
    int n;
    cout << "Enter the number : ";
    cin >> n;
    int i = n;
    int for_a = 1;
    while (i>0)
    {
        int j = i;
        while(j>0){
            cout << "1" << " " ;
            j--; 
        }
        int a = 1;
        while (a <= for_a)
        {
            cout << " " << " ";
            a++;
        }
        int b = 1;
        while (b<=for_a)
        {
            cout << " " << " ";
            b++;
        }
        int c = i;
        while (c>0)
        {
            cout << "1" << " ";
            c--;
        } 
        int d = 1;
        while (d<=5)
        {
            cout << " " << " ";
            d++;
        }
        int A = 1;
        while (A<=3)
        {
            cout << "1" << " ";
            A++;
        }
        int A1 = 1;
        while (A1 <= for_a)
        {
            cout << " " << " ";
            A1++;
        }
        int A2 = 1;
        while (A2<=i)
        {
            cout << "1" << " ";
            A2++;
        }
        int A3 = 1;
        while (A3<=i)
        {
            cout << "1" << " ";
            A3++;
        }
        int A4 = 1;
        while (A4<=for_a)
        {
            cout << " " << " ";
            A4++;
        }
        int A5 = 1;
        while (A5 <= 3)
        {
            cout << "1" << " ";
            A5++;
        }
        
        
        cout << endl;
        i--;
        for_a ++;
    }
    int for_a1 = n;
    int i_1 = 1;
    while (i_1<=n)
    {
        int j_1 = 1;
        while (j_1<=i_1)
        {
            cout << "1" << " ";
            j_1++;
        }
        int a1 = 1;
        while (a1<=for_a1)
        {
            cout << " " << " ";
            a1++;
        }
        int b1 = 1;
        while (b1<=for_a1)
        {
            cout << " " << " ";
            b1++;
        }
        int c1 = 1;
        while (c1<=i_1)
        {
            cout << "1" << " ";
            c1++;
        }
        int d1 = 1;
        while (d1<= 5)
        {
            cout << " " << " ";
            d1++;
        }
        int a2 = 1;
        while (a2<=3)
        {
            cout << "1" << " ";
            a2++;
        }
        int a3 = 1;
        while (a3<=18)
        {
            cout << " " << " ";
            a3++;
        }
        int a4 = 1;
        while (a4<=3)
        {
            cout << "1" << " ";
            a4++;
        }
        
        
        
        cout << endl;
        i_1++;
        for_a1--;
        
    }
    
    
}
