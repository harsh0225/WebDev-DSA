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

void insertHead(Node* &head,int d)      
{
    Node *temp = new Node(d);
    temp->next = head;
    head = temp;
}

void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
}

void insertPosition(Node* &head,Node* &tail,int position,int data)
{
    // insert at start
    if(position == 1)
    {
        insertHead(head,data);
        return ;
    }


    Node *temp = head;
    int count = 1;
    while(count < position-1)
    {
        temp = temp->next;
        count++;
    }
 
    if(temp == tail)
    {
        insertTail(tail,data);
        return;
    }

    Node *node1 = new Node(data);
    node1 -> next = temp ->next;
    temp -> next = node1;
}


void deleteLast(Node* &tail,Node *previous)
{
    previous -> next = NULL;
    delete tail;
    tail = previous;
}

void deleteHead(Node* &head)
{
    Node *temp = head;
    head = head->next;
    delete temp;
}

void deleteNode(Node* &head,Node* &tail,int position)
{

    int cnt = 1;
    Node *temp1 = head,*previous=0;
    while(cnt < position)
    {
        previous = temp1;
        temp1 = temp1->next;
        cnt++;
    }
    if(temp1 == tail)
    {
        deleteLast(tail,previous);
        return;
    }
    if(temp1 == head)
    {
        deleteHead(head);
        return ;
    }
    previous->next = temp1->next;
    delete temp1;
}

void print(Node* &head)
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
    insertTail(tail,13);
    insertTail(tail,14);
    cout<<"\nafter insertion->           ";
    print(head);
    insertPosition(head,tail,5,30);
    cout<<"\nInsert position ->          ";
    print(head);
    insertTail(tail,13);
    cout<<"\nInset again tail->          ";
    print(head);
    deleteNode(head,tail,1);
    cout<<"\nDelete node with position-> ";
    print(head);
    cout<<endl<<endl;
    return 0;
}