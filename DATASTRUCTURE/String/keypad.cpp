#include<iostream>
#include<string.h>
using namespace std;
int main()
{
    string output[] = {"2","22","222","3","33","333","4","44","444","5","55","555","6","66","666","7","77","777","7777","8","88","888","9","99","999","9999"};
    string s = "saurabh";
    string k = "";
    int temp;
    for(int i=0;i<s.size();i++)
    {
        if(s[i]==' ')
        {
            continue;
        }
        else
        {
            temp = s[i] - 'a';
            k = k + output[temp];
        }
    }
    cout<<k<<endl;
}