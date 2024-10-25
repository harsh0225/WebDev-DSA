#include<iostream>
using namespace std;

/*
substrings={aaab, aab, ab}
output = ab
ab content all character of other string
*/
void createtable(string s,int *arr,int loca)
{
    for(int i=0;i<s.size();i++)
    {
        int location = s[i] - 'a';
        arr[location] = 1;
    }
}




bool checkstring2(string s,int *arr,int size)
{
    for(int i=0;i<size;i++)
    {
        int temp = s[i] - 'a';
        if(arr[temp] == 0)
        {
            return 0;
        }
    }
    return 1;
}




int checkstring(string *s,int loca,int size)
{  
    int arr[26]={0};
    bool b;
    createtable(s[loca],arr,loca);

    for(int i=0;i<size;i++)
    {
        if(i==loca)
        {
            continue;
        }
        if(0 == checkstring2(s[i],arr,s[i].size()))
        {
            return 0;
        }
    }    
    return 1;
}


int main()
{
    string s[10] = {"aaab", "aab", "ab"};
    int size = INT_MAX;
    
    for(int i=0;i<3;i++)
    {
        bool b = checkstring(s,i,3);
        if(true == b)
        {
            if(s[i].size()<size)
            {
                size = s[i].size();
            }
        }
    } 
    cout<<"smallest string which content all charcter of other string is-> "<<s[size]<<endl;
    return 0;
}