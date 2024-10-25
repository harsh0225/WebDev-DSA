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

// APPROACH 1

Node * merge_sort(Node *head1,Node *head2)
{
    Node *head3 = NULL,*tail3 = NULL;
    while(head1 != NULL && head2 != NULL)
    {
        if(head1 -> data > head2 -> data)
        {
            Node *node1 = new Node(head2 -> data);
            if(head3 == NULL)
            {
                head3 = tail3 = node1;
            }
            else
            {
                tail3->next = node1;
                tail3 = node1;
            }
            head2= head2->next;
        }
        else
        {
            Node *node1 = new Node(head1 -> data);
            if(head3 == NULL)
            {
                head3 = tail3 = node1;
            }
            else
            {
                tail3->next = node1;
                tail3 = node1;
            }
            head1 = head1->next;
        }
    }
    while(head1 != NULL)
    {
        tail3 -> next = head1;
        head1 = head1->next;
    }
    while(head2 != NULL)
    {
        tail3 -> next = head2;
        head2 = head2->next;
    }
    return head3;
}

// APPROACH 2

void merge_sort2(Node *head1,Node *head2)
{
    Node *prev = head1 , *curr = head1->next,*temp=NULL;

   /*  while(head2->data < curr->data)
    {
        temp = head2;
        head2 = head2->next;
        prev = temp;
        prev -> next = curr;
    } */

    while(head2 != NULL)
    {
        if(prev->data <= head2->data && head2->data <= curr->data)                  //2 3 6 7
        {                                                                           //4 5 8 
            prev->next = head2;
            temp = head2;
            head2 = head2->next;
            temp->next = curr;
            prev = temp;
        }
        else
        {
            prev = prev->next;
            curr = curr->next;
            if(curr == NULL)
            {
                prev -> next = head2;
                return ;
            }
        }
    }
} 





void print(Node *head)
{
    while(head != NULL)
    {
        cout<<head -> data<<" ";
        head = head->next;
    }
    cout<<endl;
}


void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
}

int main()
{
    Node *node1 = new Node(2);
    Node *head1 = node1,*tail1 = node1;
    insertTail(tail1,4);   
    insertTail(tail1,6);
    insertTail(tail1,8);
    Node *node2 = new Node(3);
    Node *head2 = node2,*tail2 = node2;
    insertTail(tail2,5);
    insertTail(tail2,7);
    insertTail(tail2,9);
    cout<<"element in first link list"<<endl;
    print(head1);
    cout<<"element in second link list"<<endl;
    print(head2);
    /* Node *head3 = merge_sort(head1,head2);
    cout<<"sorted two link list is"<<endl;
    print(head3); */
    merge_sort2(head1,head2);
    print(head1);
    return 0;
}