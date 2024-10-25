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
        ~Node()
        {
            int val = this -> data;
            if(next != NULL)
            {
                delete next;
                next = NULL;
            }
            cout<<"delete free for node with data "<<val<<endl;
        }
};

void insertAtHead(Node* &head,Node* &tail,int data)
{
    if(head == NULL)
    {
        Node *node1 = new Node(data);
        head = node1;
        tail = node1;
    }
    else
    {
        Node *node1 = new Node(data);
        head -> previous = node1;
        node1 -> next = head;
        head = node1;
        node1 -> previous = NULL;
    }
}

void insertAtTail(Node* &head,Node* &tail,int data)
{
    if(tail == NULL)
    {
        Node *node1 = new Node(data);
        tail = node1;
        head = node1;
    }
    Node *node1 = new Node(data);
    tail -> next = node1;
    node1 -> previous = tail;
    tail = node1;
}

void insertAtPosition(Node* &head,Node* &tail,int position,int data)
{
    int count = 1;
    Node *temp = head;
    while(count < position-1)
    {
        temp = temp -> next;
        count++;
    }
    if(temp == head)
    {
        insertAtHead(head,tail,data);
        return ;
    }
    if(temp == tail)
    {
        insertAtTail(head,tail,data);
        return;
    }
    Node *node1 = new Node(data);
    Node *temp2 = temp -> next;
    node1 -> next = temp -> next;
    node1 -> previous = temp;
    temp -> next = node1;
    temp2 -> previous = node1;
}

void deleteHead(Node* &head)
{
    Node *temp = head;
    temp->next->previous = NULL;
    head = temp->next;
    temp->next = NULL;
    delete temp;
}

void deleteTail(Node* &tail)
{       
    Node *temp = tail;
    tail = tail->previous;
    tail->next = NULL;
    delete temp;
}

void deletePosition(Node* &head,Node* &tail,int position)
{
    Node *temp = head;
    int cnt = 1;
    while(cnt < position)
    {
        temp = temp->next;
        cnt++;
    }
    if(temp == head)
    {
        deleteHead(head);
        return;
    }
    if(temp == tail)
    {
        deleteTail(tail);
        return;
    }
    Node *temp2 = temp -> previous;
    temp2->next = temp->next;
    temp2->next->previous = temp2;
    delete temp;
}

int getLength(Node* head)
{
    int count = 0 ;
    Node *temp = head;
    while(temp != NULL)
    {
        count++;
        temp = temp -> next;
    } 
    return count;
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
    print(head);
    cout<<"leght of linklist-> "<<getLength(head)<<endl;
    insertAtTail(head,tail,30);
    insertAtTail(head,tail,40);
    print(head); 
    insertAtPosition(head,tail,4,50);
    print(head);
    deletePosition(head,tail,3);
    print(head);
    return 0;
}