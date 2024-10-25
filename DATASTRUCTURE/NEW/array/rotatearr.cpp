/* rotate vector by k value 
i/p - arr[5] = {1,2,3,4,5,6} , k=2
o/p - {5,6,1,2,3,4}
if k value is 3 then our output is
o/p - {4,5,6,1,2,3}
*/
#include<iostream>
#include<vector>
using namespace std;

void rotate(vector<int> &a,int k)
{
    vector<int> temp(a.size());
    for(int i=0;i<a.size();i++)
    {
        temp[(i+k)%a.size()]=a[i];
    } 
    a=temp;
}

int main()
{
    vector<int> v;
    int k,e;
    cout<<"\nvector element\n";
    while(1)
    {
        cout<<"push - > 1\nstop - > 0\n";
        cin>>k;
        if(k==1)
        {
            cout<<"enter element"<<endl;
            cin>>e;
            v.push_back(e);
        }
        else
        {
            break;
        }
    }
    cout<<"what's value for rotate"<<endl;
    cin>>k;
    rotate(v,k);
    // for printing vector
    for(int i=0;i<v.size();i++)
    {
        cout<<v.at(i)<<" ";
    }
    return 0;
}