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


Node *findmid(Node *head)
{
    Node *slow = head;
    Node *fast = head -> next;
    while(fast != NULL && fast -> next != NULL)
    {
        slow = slow -> next;
        fast = fast -> next -> next;
    }
    return slow;
}

Node *sort(Node *left , Node *right)
{
    if(left == NULL)
    {
        return right;
    }

    if(right == NULL)
    {
        return left;
    }

    Node *dummy = new Node(-1);
    Node *temp = dummy;

    while(left != NULL && right != NULL)
    {
        if(left -> data < right -> data)
        {   
            temp -> next = left;    
            temp = left;
            left = left -> next;
        }
        else
        {
            temp -> next = right;
            temp = right;
            right = right -> next;
        }
    }
    while(left != NULL)
    {
            temp -> next = left;    
            temp = left;
            left = left -> next;
        
    }
    while( right != NULL)
    {
            temp -> next = right;
            temp = right;
            right = right -> next;
        
    }
    return dummy -> next ;
}


Node *mergeSort(Node *head)
{
    if(head == NULL || head -> next == NULL)
    {
        return head;
    }

    //break link list into two halves

    Node * mid = findmid(head);
    Node *right = mid->next;
    Node *left = head;
    mid -> next = NULL;

    // recurssive calls to sort both halves

    left = mergeSort(left);
    right = mergeSort(right);

    // merge sort on left and right part 

    Node *result = sort(left,right);
    return result;

}

void insert_tail(Node * &tail,int data)
{
    Node *nnode = new Node(data);
    tail -> next = nnode;
    tail = nnode;
}


// printing data
void print(Node *head)
{
    while(head != NULL)
    {
        cout<<head -> data <<" ";
        head = head -> next;
    }
    cout<<endl;
}

int main()
{
    Node *nnode  =  new Node(15);
    Node *head , *tail;
    head = tail = nnode;
    insert_tail(tail,10);
    insert_tail(tail,9);
    insert_tail(tail,8);
    insert_tail(tail,7);
    insert_tail(tail,6);
    insert_tail(tail,5);
    Node *head1 = mergeSort(head);
    print(head1);
    return 0;
}  