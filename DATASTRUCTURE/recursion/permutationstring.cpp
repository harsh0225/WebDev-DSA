#include<iostream>
#include<vector>
#include<string.h>
using namespace std;

void solve(vector<string> &ans,string &str,int index)
{
    // base case
    if(index>=str.size())
    {
        ans.push_back(str);
        return ;
    }

    for(int i=index;i<str.size();i++)
    {
        swap(str[index],str[i]);
        solve(ans,str,index+1);
        swap(str[index],str[i]);
    }
}


int main()
{
    vector<string> ans;
    string str = "abc";
    int index = 0;
    cout<<"Enter string "<<endl;
    solve(ans,str,index);
    for(int i=0;i<ans.size();i++)
    {
        cout<<ans[i]<<"   ";
    }
    return 0;
}