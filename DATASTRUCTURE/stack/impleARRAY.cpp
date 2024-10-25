#include<iostream>
using namespace std;
template <class t,int k> class stack
{
    private:
        t s[20];
        int topele;
        static int sizes ;
    public:
        stack()
        {
            topele = -1;
        }

        bool isempty();
        bool isfull();
        void push(t ele);
        void pop();
        t top();
        int size();
};

template <class t,int k> int stack<t,k>::sizes = k;

template <class t,int k> bool stack<t,k>::isempty()
{
    if(topele == -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

template <class t,int k>bool stack<t,k>::isfull()
{
    if(topele == sizes-1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

template <class t,int k>void stack<t,k>::push(t ele)
{
    if(!isfull())
    {
        topele++;
        s[topele] = ele;
    }
    else
    {
        cout<<"stack is full"<<endl;
    }
}

template <class t,int k>void stack<t,k>::pop()
{
    if(!isempty())
    {   
        topele--;
    }
    else
    {
        cout<<"stack is empty"<<endl;
    }
}

template <class t,int k> int stack<t,k>::size()
{
    if(!isempty())
    {
        return topele+1;
    }
    else
    {
        return 0;
    }
}

template <class t,int k> t stack<t,k>::top()
{
    if(!isempty())
    {
        return s[topele];
    }
    else
    {
        cout<<"stack is empty"<<endl;
        return -1;
    }
}

int main()
{
    // FOR CHARACTER STACK
    cout<<"CHARACTER STACK"<<endl;
    stack<char,7> s;
    s.push('a');
    cout<<"top element is "<<s.top()<<endl;
    cout<<"size of stack is "<<s.size()<<endl;
    s.pop();
    cout<<"stack is empty "<<s.isempty()<<endl;
    cout<<"stack is full "<<s.isfull()<<endl;

    // FOR INTEGER STACK
    cout<<endl<<endl;
    cout<<"INTEGER STACK"<<endl;
    stack<int ,2> s2;
    s2.push(10);
    s2.push(20);
    cout<<"top element is "<<s2.top()<<endl;
    cout<<"size of stack is "<<s2.size()<<endl;
    s2.pop();
    cout<<"stack is empty "<<s2.isempty()<<endl;
    cout<<"stack is full "<<s2.isfull()<<endl;
}