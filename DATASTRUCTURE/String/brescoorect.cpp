#include<iostream>
#include<deque>
using namespace std;
int brescheck(char s[])
{
    deque<char> d;
    d.clear();
    for(int i=0;i<strlen(s);i++)
    {
        if(s[i] == '}' && !d.empty())
        {
            if(d.front() == '{')
            {
                d.pop_front();
            }
            else
            {
                d.push_front(s[i]);
            }
        }
        else
        {
            d.push_front(s[i]);
        }
    }
    return d.size();
}

int main()
{
    char s[10] = "}{{}}{{{";
    int flag=0;
    int n = 0;
    n = brescheck(s);
    int c;
    if(s[0]=='}')
    {
        s[0]='{';
    }
    for(int i=0;i<strlen(s);i++)
    {
        if(s[i] == '{')
        {
            int j=i+1;
            while(j<strlen(s))
            {
               
                s[j] = '}';
                c = brescheck(s);
                if(c < n)
                {
                    n = c;
                    break;
                } 
                else
                {
                    s[j] = '{';
                }
                j++;
            }
        }
        if(n == 0)
        {
            cout<<"brescheck"<<brescheck(s);
            break;
        }
    }
   /* if(flag==1)
    {
        cout<<"string is balanced "<<s<<endl;
    }
    else
    {
        cout<<"string is not balanced"<<endl;
    }*/
    return 0;
}