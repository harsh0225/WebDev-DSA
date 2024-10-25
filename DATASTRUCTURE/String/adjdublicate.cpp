/*
remove adjecent dublicate 
i/p - n = "hsssha"
            |||
         remove this
            then
            hha
            ||
        remove this
        final output is = a

o/p - a
*/

#include<iostream>
using namespace std;
int main()
{
    char n[10];
    cout<<"Enter character array"<<endl;
    cin>>n;
    int i=0,j=0;
    int d = strlen(n);
    int st,en,flag=0;
    while(i<d)
    {   
        flag=0;
        for(int j=i+1;j<strlen(n);j++)          // hha
        {
            if(n[i] == n[j])
            {
                st=i;
                flag=1;
            }
            else
            {
                en=j-1;
                break;
            }
        }
        if(flag==1)
        {
            int k=0,p=0;
            for(k=0;k<strlen(n);k++)
            {
                if(k >= st && k <= en)
                {
                    continue;
                }
                else
                {
                    n[p] = n[k];
                    p++;
                }
            }
            n[p] = '\0';
            i=0;
            d = strlen(n);
            continue;
        }
        i++;
    }
    cout<<n<<endl;
}