#include<iostream>
using namespace std;
class Node
{
    public:
        int data;
        Node *next;
        Node(int data)
        {
            this->data = data;
        }
};


Node * Kthreverse(Node *head,int k)
{
    // base case
    if(head == NULL)
    {
        return NULL;
    }

    Node *forward = NULL;
    Node *prev = NULL;
    Node *curr = head;
    int count = 0;
    while(curr != NULL && count < k)
    {
        forward = curr -> next;
        curr -> next = prev;
        prev = curr;
        curr = forward;
        count++;
    }

    if(forward != NULL)
    {
        head -> next = Kthreverse(forward,k);
    }
    
    return prev;
}

void print(Node *head)
{
    while(head != NULL)
    {
        cout<<head->data<<" ";
        head = head -> next;
    }
}

int main()
{
    Node *nnode = new Node(10);
    Node *head = NULL;
    nnode -> next = NULL;
    head = nnode;
    Node *tail = head;
   
    nnode = new Node(20);
    nnode -> next = NULL;
    tail -> next = nnode;
    tail = nnode;

    nnode = new Node(30);
    nnode -> next = NULL;
    tail -> next = nnode;
    tail = nnode;

    nnode = new Node(40);
    nnode -> next = NULL;
    tail -> next = nnode;
    tail = nnode;

    Node *temp = Kthreverse(head,2);
    print(temp);
}