#include<iostream>
using namespace std;

class Node
{
    public:
        int data;
        Node *next;
        Node *previous;

        Node(int data)
        {
            this -> data = data;
            this -> next = NULL;
        }
        /* ~Node()
        {
            int val = this -> data;
            if(next != NULL)
            {
                delete next;
                next = NULL;
            }
            cout<<"delete free for node with data "<<val<<endl;
        } */
};

void insertAtTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail -> next = node1;
    node1 -> previous = tail;
    tail = node1;
}

void reverseDoubly(Node* &tail,Node* &head)
{
    Node *temp = NULL;
    Node *temp2 = tail;
    head = temp2;
    tail = head;

    while(temp2 != NULL)
    {
        temp = temp2 -> previous;
        temp2->previous = temp2->next;
        temp2->next = temp;
        temp2 = temp;
    }
    
}

void print(Node* head)
{
    Node *temp = head;
    while(temp != NULL)
    {
        cout<<temp->data<<" ";
        temp = temp -> next;
    } 
    cout<<endl;
}

int main()
{
    Node *node1 = new Node(10);
    node1 -> previous = NULL;
    Node *head = node1,*tail = node1;
    insertAtTail(tail,20);
    insertAtTail(tail,30);
    insertAtTail(tail,40);
    insertAtTail(tail,50);
    print(head);
    reverseDoubly(tail,head);
    print(head); 
}