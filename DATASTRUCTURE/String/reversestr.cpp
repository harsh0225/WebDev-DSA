#include<iostream>
using namespace std;
void reverse(char name[],int len)
{
    int temp;
    for(int j=0,i=len-1;j<i;j++,i--)
    {   
        temp = name[j];
        name[j] = name[i];
        name[i] = temp;
    }
}


int length(char name[])
{
    int count=0;
    for(int i=0;name[i]!='\0';i++)
    {
        count++;
    }
    return count;
}


int main()
{
    char name[20];
    cout<<"Enter your name"<<endl;
    cin>>name;
    int len = length(name);
    reverse(name,len);
    cout << name << endl;
    return 0;
}