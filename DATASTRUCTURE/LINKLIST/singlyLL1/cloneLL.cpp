#include<iostream>
#include<map>
using namespace std;

class Node
{
    public:
        int data;
        Node *next;
        Node *random;
    public:
        Node(int data)
        {
            this -> data = data;
            next = NULL;
        }
};

void insert(Node * &tail,int data)
{
    Node *node1 = new Node(data);
    tail -> next = node1;
    tail = node1;
}

// for random 

void random(Node *head1)
{
    Node *prev = head1;
    head1 -> random = head1 -> next -> next;
    head1 = head1 -> next;    
    head1 -> random = prev;
    prev = head1 -> next;
    head1 = head1->next;
    head1 -> random = head1 -> next -> next;
    head1 = head1 -> next;
    head1 -> random = prev;
    prev = head1;
    head1 = head1->next;
    head1 -> random = prev;
}

void displayrandom(Node *head)
{
    while(head != NULL)
    {
        cout<<head -> random -> data <<" ";
        head = head -> next;
    }
    cout<<endl;
}

void display(Node *head)
{
    while(head != NULL)
    {
        cout<<head->data<<" ";
        head = head -> next;
    }
    cout<<endl;
}

// copy one link list to another link list

Node * copy(Node *head1)
{
    Node *head2 = NULL;
    Node *tail2 = NULL;
    while(head1 != NULL)
    {
        Node *node1 = new Node(head1->data);
        if(head2 == NULL)
        {
            head2 = tail2 = node1;
        }
        else
        {
            tail2 -> next = node1;
            tail2 = node1;
        }
        head1 = head1 -> next;
    }
    return head2;
}

// APPROACH 1 -> for coping random pointer USING MAPS

void copyrandom(Node *head1,Node *head2)
{
    Node *temp = head1;
    Node *temp1 = head2;
    map<Node *,Node *> mymap;
    while(temp != NULL)
    {
        mymap[temp] = temp1;
        temp = temp -> next;
        temp1 = temp1 -> next;            
    }
    while(head1 != NULL)
    {
        head2 -> random = mymap[head1 -> random];
        head1 = head1->next;
        head2 = head2 -> next;
    }    
}

//APPRAOCH 2 ->  merge two link list then set random pointer

void copyrandom1(Node *head1,Node *head2)
{
    Node *mainptr = head1;
    Node *temp1 = head1;
    Node *temp2 = head2;

    // merge linking first and second linking 

    while(temp2 != NULL)
    {
        Node *head1next = temp1 -> next;
        Node *head2next = temp2 -> next;
        temp1 -> next = temp2;
        temp2 -> next = head1next;
        temp1 = head1next;
        temp2 = head2next;
    }

    // copy random pointers

    while(temp1 != NULL)
    {
        temp1 -> next -> random = temp1 -> random -> next;
        temp1 = temp1 -> next ;
        if(temp1!=NULL)
        {
            temp1 = temp1 -> next;
        }
    } 
    temp1 = head1;
    temp2 = head2;

    // again seperate two link list

    while(temp1 != NULL)
    {
        Node *head1next = temp1 -> next ;
        if(head1next!=NULL)
        {
            head1next = head1next->next;
        }  
        Node *head2next = temp2 -> next ;
        if(head2next != NULL)
        {
            head2next = head2next -> next;
        }
        temp1 -> next = head1next;
        temp2 -> next = head2next;
        temp1 = head1next;
        temp2 = head2next;
    }
    display(head1);
    display(head2);
}

int main()
{
    Node *node1 = new Node(10);
    Node *head1 , *tail1;
    head1 = tail1 = node1;
    insert(tail1 , 20);
    insert(tail1 , 30);
    insert(tail1 , 40);
    insert(tail1 , 50);
    random(head1);
    //display(head1);
    Node *head2 = copy(head1);
    //copyrandom(head1,head2);
    //display(head2);
    copyrandom1(head1,head2);
}



