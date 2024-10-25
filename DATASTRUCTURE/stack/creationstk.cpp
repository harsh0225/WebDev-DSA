#include<iostream>
#include<stack>
using namespace std;

int main()
{
    stack<int> s;
    
    s.push(10);
    s.push(9);
    s.push(8);
    s.push(7);

    cout<<"size of stack "<<s.size()<<endl;
    cout<<"is stack empty -> "<<s.empty()<<endl;

    while(!s.empty())
    {
        cout<<s.top()<<" ";
        s.pop();
    }
    cout<<endl;
    return 0;
}