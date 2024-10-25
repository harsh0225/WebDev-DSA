/*
Input:  txt[] = “THIS IS A TEST TEXT”, pat[] = “TEST”
Output: Pattern found at index 10

Input:  txt[] =  “AABAACAADAABAABA”, pat[] =  “AABA”
Output: Pattern found at index 0
              Pattern found at index 9
              Pattern found at index 12

*/
#include<iostream>
#include<string.h>
using namespace std;
bool cheak(string a1,string b1)
{
    int flag=0;
    for(int i=0;i<b1.size();i++)
    {
        if(a1[i] != b1[i])
        {
            return 0;
        }
    }
    return 1;
}
void patsear(string a,string b)
{
    for(int  i=0; i<a.size();i++)
    {
        string c = "";
        if((i + b.size())-1 < a.size())
        {
            int j=0;
            for( ;j<b.size();j++)
            {
                c[j] = a[i+j];
            }
            c[j]='\0';
        }
        else
        {
            break;
        }
        if(cheak(c,b))
        {
            cout<<"pattern is found at "<<i<<" index"<<endl;
        }
    }
}
int main()
{
    string ch1 = "THIS IS A TEST TEXT";
    string ch2 = "TEST";
    patsear(ch1,ch2);
}
//................