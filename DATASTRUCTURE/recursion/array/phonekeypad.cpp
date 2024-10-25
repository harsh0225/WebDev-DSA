#include<iostream>
#include<vector>
using namespace std;

void solve(string digit,string output,vector<string> &ans,int index,string *mapping)
{
    // base case
    if(index>=digit.length())
    {
        ans.push_back(output);
        return ;
    }

    int num = digit[index] - '0';
    string value = mapping[num];
    for(int i=0;i<value.length();i++)
    {
        output.push_back(value[i]);
        solve(digit,output,ans,index+1,mapping);
        output.pop_back();
    }
} 

int main()
{
    string digit;
    cout<<"enter digits"<<endl;
    cin>>digit;

    string mapping[10] = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    
    string output;
    int index = 0;
    vector<string> ans;
    solve(digit,output,ans,index,mapping); 

    // printing no of possiblities

    cout<<"no of possibilities are -> ";
    for(int i=0;i<ans.size();i++)
    {
        cout<<ans[i]<<" ";
    }
}