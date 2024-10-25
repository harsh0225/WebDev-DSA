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
            next = NULL;
        }
};

/*
APPROACG 1

SORT 0 1 2 LINK LIST
USING COUNT AND PUT ALGORITHM
first we have to count 0 1 2 and again put in link list
*/

void sort012(Node *head)
{   
    int count_0 = 0,count_1 = 0,count_2 = 0;
    Node *temp = head;
    while(temp != NULL)
    {
        if(temp->data == 0)
        {
            count_0++;
        }
        else if(temp->data == 1)
        {
            count_1++;
        }
        else if(temp->data == 2)
        {
            count_2++;
        }
        temp = temp->next;
    }

    temp = head;

    while(count_0 > 0)
    {
        temp->data = 0;
        temp = temp->next;
        count_0--;
    }
    while(count_1 > 0)
    {
        temp->data = 1;
        temp = temp->next;
        count_1--;
    }
    while(count_2 > 0)
    {
        temp->data = 2;
        temp = temp->next;
        count_2--;
    } 
}

/* Node* merge_3(Node *head)
{
    Node *temp = head;
    Node *zero_head = NULL,*zero_tail = NULL;
    Node *one_head = NULL,*one_tail = NULL;
    Node *two_head = NULL,*two_tail = NULL;
    while(temp != NULL)
    {
        if(temp->data == 0)
        {
            Node *node_0 = new Node(0);
            if(zero_head == NULL)
            {
                zero_head = node_0;
                zero_tail = node_0;
            }
            else
            {
                zero_tail -> next = node_0;
                zero_tail =  node_0;
            }
        }
        else if(temp->data == 1)
        {
            Node *node_1 = new Node(1);
            if(zero_head == NULL)
            {
                one_head = node_1;
                one_tail = node_1;
            }
            else
            {
                one_tail -> next = node_1;
                one_tail =  node_1;
            }
        }
        else if(temp->data == 2)
        {
            Node *node_2 = new Node(2);
            if(two_head == NULL)
            {
                two_head = node_2;
                two_tail = node_2;
            }
            else
            {
                two_tail -> next = node_2;
                two_tail =  node_2;
            }
        }
        temp = temp->next;
    }
    
    zero_tail -> next = one_head;
    one_tail->next = two_head;
    return zero_head;
} */

void insert_tail(Node * &tail,Node *curr)
{
    tail -> next = curr;
    tail = curr;
}


Node * merge_012(Node *head)
{
    Node *zero_head = new Node(-1);
    Node *zero_tail = zero_head; 
    Node *one_head = new Node(-1);
    Node *one_tail = one_head;
    Node *two_head = new Node(-1);
    Node *two_tail = two_head;
    while(head != NULL)
    {
        if(head->data == 0)
            insert_tail(zero_tail,head);
        else if(head->data == 1)
            insert_tail(one_tail,head);
        else
            insert_tail(two_tail,head);
        head = head->next;
    }
    
    // one head is NULL or NOT NULL
    if(one_head -> next != NULL)
    {
        zero_tail->next = one_head -> next;
    }

    // two head is NULL or NOT NULL
    if(two_head -> next != NULL)
    {
        one_tail -> next = two_head -> next;
    }
    
    Node *head1 = zero_head -> next;
    return head1;
}

void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail -> next = node1;
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
    Node *node1 = new Node(1);
    Node *head = NULL,*tail = NULL;
    head = tail = node1;
    insertTail(tail,0);
    insertTail(tail,2);
    insertTail(tail,1);
    insertTail(tail,1);
    insertTail(tail,0);
    insertTail(tail,2);

    print(head);

    Node *temp = merge_012(head);

    print(temp);
    

}