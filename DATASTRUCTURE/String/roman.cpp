/*
Input: IX
Output: 9
IX is a Roman symbol which represents 9 

Input: XL
Output: 40
XL is a Roman symbol which represents 40

Input: MCMIV
Output: 1904
M is a thousand, 
CM is nine hundred and 
IV is four
*/
#include<iostream>
#include<vector>
int forroman(char s)
{
    if(s == 'I')
    {
        return 1;
    }
    if(s == 'V')
    {
        return 5;
    }
    if(s == 'X')
    {
        return 10;
    }
    if(s == 'L')
    {
        return 50;
    }
    if(s == 'C')
    {
        return 100;
    }
    if(s == 'D')
    {
        return 500;
    }
    if(s == 'M')
    {
        return 1000;
    }
    return -1;
}
using namespace std;
int main()
{
    string roman;
    vector<int> v;
    cout<<"enter a roman number"<<endl;
    cin>>roman;
    for(int i=0;i<roman.size();i++)
    {
        v.push_back(forroman(roman[i]));
    }
    int sum=0;
    int i;
    for(i=0;i<v.size()-1; )
    {
        if(v[i]>=v[i+1])
        {
            sum=sum+v[i];
            i++;
        }
        else
        {
            sum=sum+(v[i+1]-v[i]);
            i=i+2;
        }
    }
    sum = sum + v[i];
    cout<<sum<<endl;
    return 0;
}
