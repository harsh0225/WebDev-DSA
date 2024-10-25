/*
Input: S1 = ABCD, S2 = CDAB
Output: Strings are rotations of each other

Input: S1 = ABCD, S2 = ACBD
Output: Strings are not rotations of each other

*/

#include<iostream>
using namespace std;
int main()
{
        char a[20];
        char b[20];
        cout<<"enter first string"<<endl;
        cin>>a;
        cout<<"enter second string"<<endl;
        cin>>b;
        int j=0;
        int flag=0;
        for(int i=0;a[i]!='\0';i++)
        {
            if(a[i]==b[j])
            {
                flag=1;
                j++;
            }   
            else
            {
                flag=0;
            }
        }
        int i=0;
        if(flag==1)
        {
            for( ;b[j]!='\0';j++)
            {
                if(b[j] == a[i])
                {
                    flag=1;
                    i++;
                }
                else
                {
                    flag=0;
                }
            }
        }
        if(flag==1)
        {
            cout<<"string are rotation to each other"<<endl;
        }
        else
        {
            cout<<"string are not rotation to each other"<<endl;
        }
        return 0;
} 