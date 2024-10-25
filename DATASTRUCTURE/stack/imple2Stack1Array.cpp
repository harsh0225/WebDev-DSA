
// Implementaion Of 'Two' Stack Using 'Single' Array

#include<iostream>
using namespace std;
class stack
{
    private:
        int arr[10];
        int top1,top2,size;
    public:
        stack(int s)
        {
            top1 = -1;
            top2 = s;
            this -> size = s;
        }
        void push1(int ele);
        void pop1();
        int topele1();
        void push2(int ele);
        void pop2();
        int topele2();
        bool isempty1();
        bool isempty2();
};

bool stack::isempty1()
{
    if(top1 == -1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

bool stack::isempty2()
{
    if(top2 == size)
    {
        return true;
    }
    else
    {
        return false;
    }
}

void stack::push1(int ele)
{
    if(top1+1 < top2)
    {
        top1++;
        arr[top1] = ele;
    }
    else
    {
        cout<<"stack OverFlow"<<endl;
    }
}

void stack::push2(int ele)
{
    if(top1+1 < top2)
    {
        top2--;
        arr[top2] = ele;
    }
    else
    {
        cout<<"stack OverFlow"<<endl;
    }
}

int stack::topele1()
{
    if(top1 >= 0)
    {
        return arr[top1];
    }
    else
    {
        cout<<"stack UnderFlow"<<endl;
        return -1;
    }
}

int stack::topele2()
{
    if(top2 < size)
    {
        return arr[top2];
    }
    else
    {
        cout<<"stack UnderFlow"<<endl;
        return -1;
    }
}

void stack::pop1()
{
    if(top1 >= 0)
    {
        top1--;
    }
    else
    {
        cout<<"stack 1 is empty"<<endl;
    }
}

void stack::pop2()
{
    if(top2 < size)
    {
        top2++;
    }
    else
    {
        cout<<"stack 2 is empty"<<endl;
    }
}

int main()
{
    stack st(5);
    st.push1(10);
    st.push1(20);
    st.push2(10);
    st.push2(20);
    st.push2(30);  
    cout<<endl<<"top element of 1st stack "<<st.topele1()<<endl;
    cout<<"top element of 2nd stack "<<st.topele2()<<endl<<endl;

    cout<<"after poping element of two stack"<<endl<<endl;
    st.pop2();

    st.pop1();

    cout<<"top element of 1st stack "<<st.topele1()<<endl;
    cout<<"top element of 2nd stack "<<st.topele2()<<endl<<endl;

}