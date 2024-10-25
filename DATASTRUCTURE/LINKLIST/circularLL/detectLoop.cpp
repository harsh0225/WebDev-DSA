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
    insertTail(tail,40);
    insertTail(tail,50);
    
    tail->next = head;

    if(isLoop(head))
    {
        cout<<"link list is contain loop"<<endl;
    }
    else    
    {
        cout<<"link list contain not loop"<<endl;
    }
}