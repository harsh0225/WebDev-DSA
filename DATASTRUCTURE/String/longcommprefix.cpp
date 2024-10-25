/*
Longest Common Prefix using Word by Word Matching
Input  : {“geeksforgeeks”, “geeks”, “geek”, “geezer”}
Output : "gee"

Input  : {"apple", "ape", "april"}
Output : "ap"
*/
char long_common(char arr[][20],char s,int index,int word)
{
    int flag=1;
    for(int i=1;i<word;i++)
    {
        if(arr[i][index] != s)
        {
            flag=0;
        }
    }
    if(flag==0)
    {
        return 0;
    }
    else
    {
        return 1;
    }
}

#include<iostream>
#include<vector>
#include<string.h>
using namespace std;
int main()
{
    char arr[10][20] = {"geeksforgeeks", "geeks", "geek", "geezer"};
    char s[10];
    int i,k=0;
    for(i=0;i<4;i++)
    {
        if(long_common(arr,arr[0][i],i,4))
        {
            s[k]=arr[0][i];
            k++;
        }
    }
    s[k]='\0';
    cout<<"common character is ->  "<<s<<endl;
}