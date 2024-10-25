#include<iostream>
using namespace std;

// function for cheack palindrome or not
int palindrome(char name[],int len)
{
    for(int i=0,j=len-1;i<=j;i++,j--)
    {
        if(name[i]!=name[j])
        {
            return 0;
        }
    }
    return 1;
}

// function for count length of string
int length(char name[])
{
    int count=0;
    for(int i=0;name[i]!='\0';i++)
    {
        count ++;
    }
    return count;
}

int main()
{
    char name[20];
    cout<<"enter any string to cheack palindrome or not"<<endl;
    cin>>name;
    int len = length(name);

    if(palindrome(name,len) == 1)
    {
        cout<<"The string is palindrome"<<endl;
    }
    else
    {
        cout<<"The string is not palindrome"<<endl;
    }
    return 0;
}