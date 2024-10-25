#include<iostream>
using namespace std;

class Node
{
    public:
        int data;
        Node *next;
        Node(int data)
        {
            this -> data = data; 
            next = NULL;
        }
};

void insertTail(Node* &tail,Node* &head,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
    tail->next = head;
}

bool chkCircular(Node *head)
{
    if(head == NULL)
    {
        return true;
    }
    Node *temp = head;
    while(temp -> next != NULL && temp -> next != head)
    {
        temp = temp -> next;
    }

    if(temp -> next == head)
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main()
{
    Node *node1 = new Node(10);
    Node *head,*tail;
    head = tail = node1;
    insertTail(tail,head,12);
    insertTail(tail,head,13);
    insertTail(tail,head,14); 

    if(chkCircular(head))
    {
        cout<<"the list is circular in nature"<<endl;
    }
    else
    {
        cout<<"the list is not circular in nature"<<endl;
    }
}