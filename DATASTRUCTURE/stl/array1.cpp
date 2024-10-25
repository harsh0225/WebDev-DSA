#include<iostream>
#include<array>
using namespace std;
int main()
{
    array<int,4> a = {1,2,3,4};
    int size = a.size();

    for(int i=0;i<size;i++)
    {
        cout<<a[i]<<"  ";
    }
    cout<<endl;
    
    cout<<"element at 2 position-> "<<a.at(2)<<endl;     // access element at function 

    cout<<"array is empty-> "<<a.empty()<<endl;

    cout<<"front element in array-> "<<a.front()<<endl;

    cout<<"back element in array-> "<<a.back()<<endl;
    
    return 0;
}