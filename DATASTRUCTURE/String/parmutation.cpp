
/*
Input: str1 = “hellofourtwooneworld” , str2 = "onetwofour"
Output: YES 
*/
#include<iostream>
using namespace std;
// check two array is equal or not
bool cheakequal(int count1[],int count2[])
{
    for(int i=0;i<26;i++)
    {
        if(count1[i] != count2[i])
        {
            return 0;
        }
    }
    return 1;
}

bool parmutation(char n[],char sub[])
{
    int count1[26] = {0};
    int count2[26] = {0};

    int j=0;
    while(j<strlen(sub))
    {
        int index = n[j] - 'a';
        count1[index]++;
        j++;
    }

    int i=0;
    while(i<strlen(sub))
    {
        int index = sub[i] - 'a';
        count2[index]++;
        i++;
    }

    if(cheakequal(count1,count2))
        return 1;

    int windowSize = strlen(sub);
    while(i<strlen(n))
    {
        int newchar = n[i] - 'a';
        count1[newchar]++;

        int oldchar = n[i-windowSize] - 'a';
        count1[oldchar]--;

        if(cheakequal(count1,count2))
            return 1;
        i++;    
    }
    return 0;
}


int main()
{
    char n[20],sub[10];
    cout<<"enter first string"<<endl;
    cin>>n;
    cout<<"enter substring "<<endl;
    cin>>sub;
    //cout<<strlen(n)<<endl<<strlen(sub)<<endl;
    if(parmutation(n,sub))
    {
        cout<<"string is present"<<endl;
    }
    else
    {
        cout<<"string is absent"<<endl;
    }
    return 0;
}