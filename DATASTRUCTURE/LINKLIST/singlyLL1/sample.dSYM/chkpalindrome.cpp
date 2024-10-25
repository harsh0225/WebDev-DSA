#include<iostream>
using namespace std;


class Node
{
    private :
        Node *head,*tail;
        char data;
        Node *next;
    public:
        Node()
        {
            head = tail = NULL;
        }
        void insert(char ch);
        void display();
        void copy(char *crr);
};

void Node::insert(char data)
{
    Node *node1 = new Node;
    node1 -> data = data;
    node1 -> next = NULL;
    if(head == NULL)
    {
        head = tail = node1;
    }
    else
    {
         tail -> next = node1;
        tail = node1;
    }
}

void Node::display()
{
    Node *temp = head;
    while(temp != NULL)
    {
        cout<<temp -> data<<" ";
        temp = temp -> next;
    }
    cout<<endl;
}


void Node::copy(char *crr)
{
    int i = 0;
    Node *temp = head;
    while(temp != NULL)
    {
        crr[i] = temp -> data;
        temp = temp -> next;
        i++;
    }
}

bool chkpali(char *crr,int size)
{
    int s = 0;
    int e = size-1;
    while(s<e)
    {
        if(crr[s] == crr[e])
        {
            s++;
            e--;
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
    Node n1;
    int n;
    char ch;
    char crr[10];
    cout<<"how many element you can add int string"<<endl;
    cin>>n;
    cout<<"enter string"<<endl;
    for(int i=0;i<n;i++)
    {
        cin>>ch;
        n1.insert(ch);
    }
    n1.copy(crr);
    if(chkpali(crr,n) == true)
    {
        cout<<"string is palindrome"<<endl;
    }
    else
    {
        cout<<"this string is not palindrome"<<endl;
    }
    return 0;
}

