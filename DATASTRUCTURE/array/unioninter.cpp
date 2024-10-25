/*  FIND UNION AND INTERSECTION OF AN TWO ARRAY
  suppose
  arr1[] = {1,5,6,7,2}
  arr2[] = {2,5,9,3,8}

  union = {1,5,6,7,2,9,3,8}
  intersection = {2,5}
*/
#include<iostream>
using namespace std;
int enter(int a[])
{
  int n;
  cout<<"how many element you add in array"<<endl;
  cin>>n;
  cout<<"enter "<<n<<" array element"<<endl;
  for(int j=0;j<n;j++)
  {
    cin>>a[j];
  }
  return(n);
}
void display(int a[],int n)
{
  for(int i=0;i<n;i++)
  {
    cout<<a[i]<<'\t';
  }
  cout<<endl;
}

int main()
{
  int a[10],b[10],c[20],e[20],i=0,n,m,d,k=05,f=0;
  cout<<"enter first array"<<endl;
  n=enter(a);
  cout<<"enter second array"<<endl;
  m=enter(b);
  for(d=0;d<n;d++)
  {
    c[d]=a[d];
  }
  for(i=0;i<m;i++)
  {
    for(int j=0;j<n;j++)
    {
      if(b[i]==a[j])
      {
        e[f]=b[i];
        f++;
        k=0;
        break;
      }
      else
      {
        k=b[i];
      }
    }
    if(k!=0)
      {
        c[d]=k;
        d++;
      }
  }
  cout<<"array union is"<<endl;
  display(c,d);
  cout<<"array intersection is"<<endl;
  display(e,f);
}
