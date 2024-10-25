/* print the following pattern
   1 2 3 4
     2 3 4
       3 4 
         4
*/
#include<iostream>
using namespace std;
int main()
{
    int n;
    cout<<"enter any no";
    cin>>n;
    for(int i=1;i<=n;i++)
    {
        for(int j=1;j<i;j++)
        {
            cout<<"  ";
        }
        for(int k=i;k<=n;k++)
        {
            cout<< k << " ";
        }
        cout<<"\n";
    }
}