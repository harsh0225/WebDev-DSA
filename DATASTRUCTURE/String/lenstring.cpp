#include<iostream>
using namespace std;

int getlength(char arr[])                        // function for counting length
{
    int count = 0;
    for(int i=0 ; arr[i] != '\0' ; i++)
    {
        count++;
    }
    return count;
}

int main()
{
    char name[10];
    cout<<"Enter your name"<<endl;
    cin>>name;
    cout<<"lengh : "<<getlength(name)<<endl;
    return 0;
}
