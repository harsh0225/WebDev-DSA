// REMOVE UNSORTED DUBLICATES

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
        }
};

void removedubli(Node *head,Node * &tail)
{
    Node *temp = head,*temp2 = NULL;
    Node *del = NULL;
    while(temp->next != NULL)
    {
        temp2 = temp->next;
        int k = temp->data;
        Node *previous = temp;
        while(temp2 != NULL)
        {   
            if(k == temp2->data)
            {
                del = temp2;
                previous -> next = temp2 ->next;
                temp2 = temp2->next;
                delete del;
                continue;
            }
            previous = temp2;
            temp2 = temp2->next;
        }
        if(temp->next != NULL)
        {
            temp = temp -> next;
        }
    }
}

void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
}

void print(Node *head)
{
    while(head != NULL)
    {
        cout<<head->data<<" ";
        head = head->next;
    }
    cout<<endl;
}

int main()
{
     Node *node1 = new Node(10);
    Node *head = NULL , *tail = NULL;
    head = tail = node1;
    insertTail(tail,10);
    insertTail(tail,50);
    insertTail(tail,40);
    insertTail(tail,50);
    insertTail(tail,50);
    print(head);
    removedubli(head,tail);
    print(head);
}