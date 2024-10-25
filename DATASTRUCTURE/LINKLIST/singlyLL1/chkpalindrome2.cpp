#include<iostream>
using namespace std;
class Node
{
    public:
        char data;
        Node *next;
    Node(char ch)
    {
        data = ch;
        next = NULL;
    }
};

void insert(Node * &tail,char ch)
{
    Node *node1 = new Node(ch);
    tail -> next = node1;
    tail = node1;
}

void display(Node *head)
{
    while(head != NULL)
    {
        cout<<head -> data<<" ";
        head = head->next;
    }
    cout<<endl;
}

Node * mid(Node *head)
{
    Node *slow = head;
    Node *fast = head -> next;
    while(fast != NULL && fast->next != NULL)
    {
        fast = fast -> next -> next ;
        slow = slow -> next;
    }
    return slow;
}

Node * reverse(Node *head)
{
    Node *curr = head;
    Node *prev = NULL;
    while(head != NULL)
    {
        curr = head -> next;
        head -> next = prev;
        prev = head;
        head = curr;
    }
    return prev;
}

bool chkpali(Node *head, Node *middle)
{
    Node *node1 = middle ;
    while(node1!=NULL)
    {
        if(head -> data == node1 -> data)
        {
            head = head->next;
            node1 = node1 -> next;
        }
        else
        {
            return false;
        }
    }
    return true; 
}


int main()
{
    Node *node1 = new Node('a');
    Node *head = NULL,*tail = NULL;
    head = tail = node1;
    insert(tail,'b');
    insert(tail,'c');
    insert(tail,'b');
    insert(tail,'a');
    display(head);

    Node *middle = mid(head);
    middle -> next = reverse(middle -> next);
    
    if(chkpali(head,middle->next))
    {
        cout<<"the string is palindrome"<<endl;
    }
    else
    {
        cout<<"the string is not palindrome"<<endl;
    }
    Node *node11 = new Node('k');
}