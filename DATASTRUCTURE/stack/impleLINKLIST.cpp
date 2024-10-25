#include<iostream>
using namespace std;
struct stack1
{
    int data;
    stack1 *next;
};

class stack
{
    private:
        stack1 *top;
    public:
        stack()
        {
            top = NULL;
        }
        bool isempty();
        void push(int ele);
        void pop();
        int top1();
};

bool stack::isempty()
{
    if(top == NULL)
    {
        return true;
    }
    else
    {
        return false;
    }
}

void stack::push(int ele)
{
    stack1 *nnode = new stack1;
    nnode -> data = ele;
    nnode -> next = top;
    top = nnode;
}

void stack::pop()
{
    if(!isempty())
    {
        stack1 *temp = top;
        top = top -> next;
        delete temp;
    }
    else
    {
        cout<<"stack is empty"<<endl;
    }
}

int stack::top1()
{
    if(!isempty())
    {
        return top -> data;
    }
    else
    {
        cout<<"stack is empty"<<endl;
        return -1;
    }
}

int main()
{
    stack s;
    s.push(10);
    s.push(11);
    s.push(12);
    s.pop();
    cout<<"top element is "<<s.top1()<<endl;
    cout<<"stack is empty or not "<<s.isempty()<<endl;
}