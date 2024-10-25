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

// APPROACH NO 1 (RETURN POSITION OF NODE)

int middle1(Node* head)
{
    int cnt=0;
    Node* temp = head;
    while(temp != NULL)
    {
        temp = temp->next;
        cnt++;
    } 
    return cnt; 
}
 
//APPROACH NO 2  (RETURN MIDDLE NODE)

Node* middle2(Node* head)
{
    if(head == NULL || head -> next == NULL)
    {
        return head;
    }
    Node *slow = head;
    Node *fast = head->next;
    while(fast != NULL)
    {
        fast = fast -> next;
        if(fast != NULL)
        {
            fast = fast->next;
        }
        slow = slow -> next;
    }
    return slow;
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

   /*  nnode = new Node(50);
    nnode -> next = NULL;
    tail -> next = nnode;
    tail = nnode; */

    int count = middle1(head);
    cout<<"middle of LL is -> "<<(count/2)+1<<endl;

    Node *temp = middle2(head);
    cout<<temp->data;

}