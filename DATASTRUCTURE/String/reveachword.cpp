// programme for REVERSE a number

#include<iostream>
using namespace std;
int main()
{
    char name[20] = {'h','a','r','s','h',' ','v','a',' ','r','d','h','a','n','\0'};
    int k=0,i=0;
    char temp;
    while(1)
    {
        if(name[i] == ' ' || name[i] == '\0')
        {
            for(int j=i-1; k<=j ; j--,k++)
            {
                temp = name[k];
                name[k] = name[j];
                name[j] = temp;  
            }
            k=i+1;
        }
        if(name[i] == '\0')
        {
            break;
        }
        i++;
    }

    for(int k=0;k<=i;k++)
    {
        cout<<name[k]<<" ";
    }
    return 0;
}
 