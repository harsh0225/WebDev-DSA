#include<iostream>
#include<vector>
using namespace std;

bool checkpali(vector<char> &pali)
{
    int s = 0,e = pali.size()-1;
    while(s < e)
    {
        if(pali[s] != pali[e])
        {
            return false;
        }
        s++;
        e--;
    }
    return true;
}


int main()
{
    vector<char> ch;
    string s = "AACECAAAA";

    // push_back string in reverse order
    for(int i=s.size()-1;i>=0;i--)
    {
        ch.push_back(s[i]);
    }
    if(checkpali(ch) == 1)
    {
        cout<<"string is already palidrome"<<endl;
        exit(0);
    }
    // printing reverse string
    cout<<"reverse string is -> ";
    for(int i=0;i<ch.size();i++)
    {
        cout<<ch[i]<<" ";
    }
    cout<<endl;
    
    
    int count = 0;
    int size = ch.size();



    for(int i=0;i<size;i++)
    {
        // for push back
        cout<<"append -> ";
        for(int j=i;j>=0;j--)
        {
            cout<<ch[j]<<" ";
            ch.push_back(ch[j]);
            count++;
        }
        cout<<endl;

        // for check string is palindrome
        if(checkpali(ch) == 1)
        {
            cout<<count<<endl;
            //exit(0);
            break;
        }

        // for pop back
        for(int j=i;j>=0;j--)
        {
            ch.pop_back();
            count--;
        }
    }
}

















/* #include<iostream>
#include<deque>
using namespace std;

bool checkpali(deque<char> &pali)
{
    int s = 0,e = pali.size()-1;
    while(s<=e)
    {
        if(pali.at(s) != pali.at(e))
        {
            return false;
        }
        s++;
        e--;
    }
    return true;
}


int main()
{
    deque<char> pali;
    string a = "ABC";
    for(int i=0;i<a.size();i++)
    {
        pali.push_back(a[i]);
    }
    int size = pali.size();
    if(checkpali(pali) == 1)
    {
        cout<<"this string is already palindrome"<<endl;
        exit(0);
    }
    int count=0;
    for(int i = size-1;i>=0;i--)
    {
        for(int j=i;j<size;j++)
        {
            cout<<pali.at(j)<<endl;
            pali.push_front(pali.at(j));
            count++;
        }  

        for(int i=0;i<pali.size();i++)
        {
            cout<<pali.at(i)<<" ";
        }
        cout<<endl;
        if(checkpali(pali) == 1)
        {
            cout<<count<<endl;
            exit(0);
        }
        else
        {
            for(int j=i;j<size;j++)
            {
                pali.pop_front();
                count--;
            }
        }
    }
    cout<<count;
    for(int i=0;i<pali.size();i++)
    {
        cout<<pali.at(i);
    }
} */