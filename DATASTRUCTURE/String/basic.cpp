/*
    string - string is a sequence of character 
    - last character of a string is '\0' where the string is end
    - '\0' - NULL CHARCTEr
*/     

#include<iostream>
using namespace std;
int main()
{
    char name[20] ;
   
    cout << "Enter your name" << endl ;
    
    cin >> name ;                   // input string

    name[2] = '\0';                 // if we put null character then the string is end

    cout << "Your name is " << name << endl ;           // printing string
   
    return 0 ;
}