#include<iostream>
using namespace std;
int editdistance(char arr1[],char arr2[])
{
    int i=0,j=0,count=0;
    while(i<strlen(arr1))
    {
        if(arr1[i]==arr2[j])
        {
            i++;
            j++;
        }
        else
        {
            count++;
            j++;
        }
    }
    return count;
}

int main()
{
    char a[20];
    char b[20];
    cout<<"Enter first string"<<endl;
    cin>>a;
    cout<<"Enter second string"<<endl;
    cin>>b;
    cout<<editdistance(a,b)<<endl;
    return 0;
}