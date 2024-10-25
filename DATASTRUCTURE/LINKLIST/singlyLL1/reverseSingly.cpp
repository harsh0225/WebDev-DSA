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

// APPROACH 1 -> USING NORMAL FUNCTION

Node* reverse(Node *head)
{
    Node *prev = NULL;
    Node *curr = head;
    Node *forward = NULL;
    while(curr != NULL)
    {
        forward = curr -> next;         
        curr -> next = prev;
        prev = curr;
        curr = forward;
    }
    return prev;
}

// APPROACH 2 -> USING RECURSION

void reverse2(Node* &head, Node* curr, Node* prev) 
{
    // bse case
    if(curr == NULL)
    {
        head = prev;
        return;
    }

    Node *forward = curr -> next;
    reverse2(head,forward,curr);
    curr -> next = prev;
}

// APPROACH 3 = USING RECURSION

Node * reverse3(Node* head)
{
    if(head == NULL || head->next == NULL)
    {
        return head;
    }

    Node *chotaHead = reverse3(head->next);
    head->next->next = head;
    head -> next = NULL;
    return chotaHead;
}
// PRINTING LIST

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
/*
    print(head);
    head = reverse(head);
    cout<<endl;
    print(head);
   
    USING RECURSION 
    Node *curr = head;
    Node *prev = NULL; 
    reverse2(head,curr,prev); */
    
    //USING NORMAL FUNCTION
    head = reverse3(head);
    cout<<endl;
    print(head);
}