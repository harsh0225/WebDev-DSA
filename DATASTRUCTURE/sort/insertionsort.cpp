#include<iostream>
using namespace std;

// void inser_sort(int arr[],int size)
// {
//     int j=0,temp;
//     for(int i = 1 ; i < size ; i++)
//     {
//         temp = arr[i];
//         j = i-1;
//         while(j >= 0)
//         {
//             if(arr[j] > temp)
//             {
//                 arr[j+1] = arr[j];
//                 j--;
//             }
//             else
//             {
//                 break;
//             }
//         }
//         arr[j+1] = temp;
//     }
// }

// int main()
// {
//     int arr[5] = {5,4,3,2,1};
//     inser_sort(arr,5);
//     cout << endl;
//     for(int i = 0 ; i < 5 ; i++)
//     {
//         cout << arr[i] << "  " ; 
//     } 
//     cout << endl << endl ;
//     return 0;
// }

// bubble sort


// void bubble(int *arr,int size)
// {
//     for(int i=0;i<size-1;i++)
//     {
//         for(int j=0;j<size-(i+1);j++)
//         {
//             if(arr[j] > arr[j+1])
//             {
//                 int temp = arr[j];
//                 arr[j]=arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
// }


// int main()
// {
//     int arr[10],size;
//     cout<<"enter size of array"<<endl;  
//     cin>>size;
//     cout<<"enter array element"<<endl;
//     for(int i=0;i<size;i++)
//     {
//         cin>>arr[i];
//     }
//     bubble(arr,size);
//     for(int i=0;i<size;i++)
//     {
//         cout<<arr[i]<<" ";
//     }
//     return 0;
// }

struct node
{
    int data;
    node *next;
};

void create(node* &head,node * &tail)
{
    char ch;
    do 
    {  
        node *nnode = new node;
        cout<<"enter data"<<endl;
        cin>>nnode->data;
        nnode -> next = NULL;
        if(head == NULL)
        {
            head = tail = nnode;
        }
        else
        {
            tail->next = nnode;
            tail = nnode;
        }
        cout<<"you want add more node"<<endl;
        cin>>ch;
    } while(ch == 'y');
}


void display(node *head)
{
    node *temp = head;
    while(temp != NULL)
    {
        cout<<temp -> data<<" ";
        temp = temp -> next;
    }
}

int main()
{
    node *head = NULL;
    node *tail = NULL;
    create(head,tail);
    display(head);
}