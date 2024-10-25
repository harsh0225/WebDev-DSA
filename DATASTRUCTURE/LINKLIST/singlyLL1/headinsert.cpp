/*
    insert head node means = insert element in reverse order
*/



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
        }
};

void insertHead(Node* &head,int d)      // we copy the refrence of head because head value again change;
{
    Node *temp = new Node(d);
    temp->next = head;
    head = temp;
}

void print(Node* head)
{
    Node *temp = head;
    while(temp != NULL)
    {
        cout<<temp->data<<" ";
        temp = temp->next;
    }
}

int main()
{
    Node *node1 = new Node(10);
    node1->next = NULL;
    Node *head = node1;
    insertHead(head,12);
    print(head);
}