#include<iostream>
#include<vector>
using namespace std;

bool isSafe(int x,int y,int visited[][4],int n,int m[][4])
{
    if((x>=0 && x<n ) && (y>=0 && y<n) && (visited[x][y] == 0) && (m[x][y] == 1))
    {
        return true;
    }
    else
    {
        return false;
    }
}


void solve(int m[][4],int n,vector<string> &ans,string path,int visited[][4],int x,int y)
{
    if(x==n-1 && y==n-1)
    {
        ans.push_back(path);
        return;
    }

    visited[x][y] = 1;
    // DOWN , LEFT , RIGHT , UP

    int newx = x+1;
    int newy = y;
    if(isSafe(newx,newy,visited,n,m))
    {
        path.push_back('D');
        solve(m,n,ans,path,visited,newx,newy);
        path.pop_back();
    }

    newx = x;
    newy = y-1;
    if(isSafe(newx,newy,visited,n,m))
    {
        path.push_back('L');
        solve(m,n,ans,path,visited,newx,newy);
        path.pop_back();
    }

    newx = x;
    newy = y+1;
    if(isSafe(newx,newy,visited,n,m))
    {
        path.push_back('R');
        solve(m,n,ans,path,visited,newx,newy);
        path.pop_back();
    }

    newx = x-1;
    newy = y;
    if(isSafe(newx,newy,visited,n,m))
    {
        path.push_back('R');
        solve(m,n,ans,path,visited,newx,newy);
        path.pop_back();
    }
    visited[x][y] = 0;
}

int main()
{
   int m[4][4];
    int n=4;
    cout<<"enter array"<<endl;
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            cin>>m[i][j];
        }
    }
    vector<string> ans;
    string path = "";
    int visited[4][4];
    for(int i=0;i<n;i++)
    {
        for(int j=0;j<n;j++)
        {
            visited[i][j] = 0;
        }
    }
    int x=0,y=0;
    solve(m,n,ans,path,visited,x,y);
    for(int i=0;i<ans.size();i++)
    {
        cout<<ans[i];        
    }
}