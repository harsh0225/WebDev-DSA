#include<iostream>
#include<map>
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

// APPROACH - 1 (STORE MAPPING)

bool isLoop(Node *head)
{
    Node *temp = head;
    map<Node * , bool> visited;
    while(temp != NULL)
    {
        if(visited[temp] == true)
        {
            return true;
        }
        visited[temp] = true;
        temp = temp -> next;
    }
    return false;
}

// APPROACH - 2 (FLOYDS DETECT ALGORITHM)
// RETURN LINK LIST IS CONSIST OF LOOP OR NOT
/* bool floyd_Detect(Node *head)
{
    Node *slow = head;
    Node *fast = head ;

    while(slow != NULL && fast != NULL)
    {
        fast = fast -> next;
        if(fast == NULL)
        {
            return false;
        }
        fast = fast -> next;
        slow = slow -> next;
        if(fast == slow)
        {
            return true;
        }
    }
    return false;
} */
// RETURN NODE OF METTING SLOW AND FAST
Node * return_Detect(Node *head)
{
    Node *slow = head;
    Node *fast = head ;

    while(slow != NULL && fast != NULL)
    {
        fast = fast -> next;
        if(fast != NULL)
        {
            fast = fast -> next;
        }
        slow = slow -> next;
        if(fast == slow)
        {
            return fast;
        }
    }
    return NULL;
} 

// starting node of loop

Node * startNode(Node *head)
{
    Node *slow = head;
    Node *fast = head ;

    while(slow != NULL && fast != NULL)
    {
        fast = fast -> next;
        if(fast != NULL)
        {
            fast = fast -> next;
        }
        slow = slow -> next;
        if(fast == slow)
        {
            slow = head;
            while(1)
            {
                slow = slow -> next;
                fast = fast -> next;
                if(slow == fast)
                {
                    return slow;
                }
            }
        }
    }
    return NULL;
}

// remove loop from link list 

void removeloop(Node *head)
{
    Node *fast = return_Detect(head);
    Node *slow = head ;
    Node *temp = NULL;
    while (fast != slow)
    {
        temp = fast;
        fast = fast -> next;
        slow = slow -> next;
    } 
    temp -> next = NULL;
}

void insertTail(Node* &tail,int data)
{
    Node *node1 = new Node(data);
    tail->next = node1;
    tail = node1;
}

int main()
{
    Node *nnode = new Node(10);
    Node *head = NULL,*tail = NULL;
    head = tail = nnode;

    insertTail(tail,20);
    insertTail(tail,30);

    Node *temp = tail;
    
    insertTail(tail,40);
    insertTail(tail,50);
    
    tail -> next = temp;            // insert tail next location temp becz create loop

    /* if(floyd_Detect(head))
    {
        cout<<"link list is contain loop"<<endl;
    }
    else    
    {
        cout<<"link list contain not loop"<<endl;
    } */

    removeloop(head);           // for removve loop from link list
    
    // stsrt node return the start position of Link List

    Node *loopnode = startNode(head);
    if(loopnode==NULL)
    {
        cout<<"not loop consist in link list"<<endl;
    }
    else
    {
         cout<<"position of loop node starts-> "<<loopnode->data;
    }
}