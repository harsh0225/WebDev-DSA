/*
arr1 = {1,2,3,4,5}
arr2 = {6}
 1 2 3 4 5
+        6
-----------
 1 2 3 5 1 
o/p = array is = {1,2,3,5,1}
*/
// USING VECTOR
#include<iostream>
#include<vector>
using namespace std;
void addition(vector<int> &a,vector<int> &b)
{
    vector<int> temp;
    int i = a.size()-1;
    int j = b.size()-1;
    int ad,p,c,carry=0;
    // case first
    while(i>=0 && j>=0)
    {
        ad = a[i] + b[j] + carry;
        c = ad % 10;
        temp.push_back(c);
        carry = ad / 10;
        i--;
        j--;
    }
    // case second
    while(i>=0)
    {
        ad = a[i] + carry;
        c = ad % 10;
        temp.push_back(c);
        carry = ad / 10;
        i--;
    }
    // case third
    while(j>=0)
    {
        ad = b[j] + carry;
        c = ad % 10;
        temp.push_back(c);
        carry = ad / 10;
        j--;
    }
    // case fourth 
    if(carry!=0)
    {
        temp.push_back(carry);
    }

    int t;
    for(int i=0,j=temp.size()-1;i<=j;i++,j--)
    {
        t=temp[i];
        temp[i]=temp[j];
        temp[j]=t;
    }
    for(int i=0;i<temp.size();i++)
    {
        cout<<temp.at(i)<<"  ";
    }
}
int main()
{
    vector<int> a;
    vector<int> b;
    int i;
    // for input vector for first 
    cout<<"enter first vector element "<<endl;
    while(1)
    {
        cout<<"push -> 1 / stop - > 0"<<endl;
        cin>>i;
        if(i==1)
        {
            cout<<"element"<<endl;
            cin>>i;
            a.push_back(i);
        }
        else
        {
            break;
        }
    }
    // for input vector second
    cout<<"enter second vector element "<<endl;
    while(1)
    {
        cout<<"push -> 1 / stop - > 0"<<endl;
        cin>>i;
        if(i==1)
        {
            cout<<"element"<<endl;
            cin>>i;
            b.push_back(i);
        }
        else
        {
            break;
        }
    }
    addition(a,b);
    return 0;
}




