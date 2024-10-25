/*
nput: exp = “[()]{}{[()()]()}” 
Output: Balanced
Explanation: all the brackets are well-formed

Input: exp = “[(])” 
Output: Not Balanced 
*/


#include<iostream>
#include<deque>
using namespace std;
int main()
{
    char ch[20] ="[(]){}{[()()]()}";
    deque<char> d;
    for(int i=0;ch[i] != '\0';i++)
    {
        if(d.empty())
        {
            d.push_front(ch[i]);
        }
        else if(d.front() == '(' && ch[i] == ')' || d.front() == '[' && ch[i] == ']' || d.front() == '{' && ch[i] == '}')
        {
            d.pop_front();
        }
        else
        {
            d.push_front(ch[i]);
        }
    }
    if(d.empty())
    {
        cout<<"string is balanced"<<endl;
    }
    else
    {
        cout<<"string is not balance"<<endl;
    }
    return 0;
}