#include<iostream>
using namespace std;

class Node
{
    public:
        int data;
        Node *next;

        Node(int d)
        {
            data = d;
            next = NULL;
        }
};

void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
}

void print(Node * &head)
{
    Node *temp = head;
    while(temp != NULL)
    {
        cout<<temp -> data<<"  ";
        temp = temp -> next;
    }
}

int main()
{
    Node *node1 = new Node(10);
    Node *head,*tail;
    head = tail = node1;
    insertTail(tail,12);
    print(head);
    cout<<endl;
    insertTail(tail,13);
    print(head);
    cout<<endl;
    insertTail(tail,14);
    print(head);
}