#include<iostream>
using namespace std;

struct Node
{
    int data;
    Node *next;
};

class obj
{
    private:
        Node *head , *tail;
    public:
        obj()
        {
            head = NULL;
            tail = NULL;
        }
        void insert(int data);
        void display();
        void reverse();
        void addition(obj &ob1,obj &ob2);
};

void obj::insert(int data)
{
    Node *node1 = new Node;
    node1->next = NULL;
    node1 -> data = data;
    if(head == NULL)
    {
        head = tail = node1;
    }
    else
    {
        tail -> next = node1;
        tail = node1;
    }
}

void obj::display()
{
    Node *temp = head;
    while(temp!=NULL)
    {
        cout<<temp->data;
        temp = temp -> next;
    }
    cout<<endl;
}

void obj::reverse()
{
    Node *curr =NULL;
    Node *prev = NULL;
    Node *temp = head;
    tail = head;
    while(temp != NULL)
    {
        curr = temp -> next;
        temp -> next = prev;
        prev = temp ;
        temp = curr;
    }
    head = prev;
}

void obj :: addition(obj &ob1,obj &ob2)
{
    if(ob1.head == NULL || ob2.head == NULL)
    {
        cout<<"the object is NULL"<<endl;
        return ;
    }
    ob1.reverse();
    ob2.reverse();
    Node *temp1 = ob1.head;
    Node *temp2 = ob2.head;
    int carry = 0;
    while(temp1 != NULL && temp2 != NULL)
    {
        int a = temp1 -> data + temp2 -> data;
        int remender = a % 10;
        Node *node1 = new Node;
        node1->data = remender;
        if(head == NULL)
        {
            head = tail = node1;
        }
        else
        {
            tail -> next = node1;
            tail = node1;
        }
        carry = a/10;
        temp1 = temp1 -> next;
        temp2 = temp2 -> next;
        if(temp1 != NULL)
        {
            temp1->data = temp1->data + carry;
        }
        else if(temp2 != NULL)
        {
            temp2->data = temp2 -> data + carry;
        }
        else
        {
            node1 -> data = a;
        }
    }
    ob1.reverse();
    ob2.reverse();
    reverse();
}

int main()
{
    obj obj1;
    obj1.insert(1);
    obj1.insert(1);
    cout<<"first no is ";
    obj1.display();
    obj obj2;
    obj2.insert(1);
    obj2.insert(1);
    cout<<"second no is ";
    obj2.display();
    obj obj3;
    obj3.addition(obj1,obj2);
    cout<<"addition is ";
    obj3.display();
}