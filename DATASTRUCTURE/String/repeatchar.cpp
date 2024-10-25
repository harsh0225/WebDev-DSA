/*  Find the maxrepeat character in string
    solution - 
    first we have to create an array its size is 26 and intialize every element as '0'
    In for loop 0 to length of string every charcter store its alphabet indexing in array repeat how many times
    and then find maximum no occure in array also their index
*/


#include<iostream>
using namespace std;
char maxoccure(char s[])
{
    int arr[26] = {0};
    int number = 0;
    for(int i=0;i<strlen(s);i++)
    {
        char ch = s[i];
        // for uppercase
        if(ch >= 'A' && ch <= 'Z')
        {
            number = ch - 'A';
        } 
        else    // for lowercase
        {
            number = ch - 'a';
        }
        arr[number]++;
    }

    int maxi = -1,k;
    for(int i=0 ; i < 26 ;i++)
    {
        if(arr[i]>maxi)
        {
            maxi = arr[i];
            k = i;
        }
    }
    if(maxi>1)
    {
        char c = k + 'a';
        return c;
    }
    return '0';
}
int main()
{
    char name[1000];
    cout<<"enter any string"<<endl;
    cin>>name;
    char ch = maxoccure(name);
    if(ch == '0')
    {
        cout<<"no repeat character"<<endl;
    }
    else
    {
        cout<<"repeated character is "<<ch<<endl;
    }
    return 0;
}