 /* find the string is palindrome or not and remove non valid char
 valid - a to z && A to Z && 0 to 9
ex. i/p - char arr[10] = ['c' , 'b' ,' ' , 'c' , '*' , '%' }
    first we remove non-valid and then check the no is palindrome or not
    o/p - the no is palindrome
*/    
#include<iostream>
#include<string.h>
using namespace std;                 
bool valid(char x)                  
{
        if((x >='a' && x <= 'z') || (x >= 'A' && x <= 'Z') || x >= '0' && x <= '9')
        {
           return 1;
        }
    return 0;
}
int palindrome(string s)
{
    for(int i=0,j=s.size()-1;i<j;i++,j--)
    {
        if(s[i]!=s[j])
        {
            return 0;
        }
    }
    return 1;
}
char lowercase(char ch)
{
    char temp;
    if((ch >= 'a' && ch<= 'z') || (ch >= '0' && ch <= '9'))
    {
        return ch;
    }
    else
    {
        temp = ch - 'A' + 'a';
        return temp;
    }
}
int main()
{
    string a,b;
    cout<<"enter any string to cheak paliindrome or not"<<endl;
    cin>>a;
    int n = a.length();
    for(int i=0;i<n;i++)
    {
        if(valid(a[i]))
        {
            b.push_back(a[i]);
        }
    }
    n = b.size();
    for(int i=0;i<n;i++)
    {
        b[i] = lowercase(b[i]);
    }
    if(palindrome(b) == 1)
    {
        cout<<"The string is palindrome"<<endl;
    }
    else
    {
        cout<<"The string is not palindrome"<<endl;
    }
    return 0;
}
