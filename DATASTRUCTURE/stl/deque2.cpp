/*
deque is used dynamic memory to store the data
we can perform insertion and deleation operation in two ends first and last
we cannot access the capacity of deque using capacity functionj
*/
#include<iostream>
#include<deque>
using namespace std;
int main()
{
    deque<int> d;
    // perform push back operation
     d.push_back(1);

    // perform push front operation
    d.push_front(2);

    for(int i=0;i<2;i++)
    {
        cout<<d.at(i)<<" ";
    }
    cout<<endl;

    // perform pop back operation
    cout<<"before pop back -> "<<d.size()<<endl;
    d.pop_back();
    cout<<"after pop back -> "<<d.size()<<endl;

    d.push_back(1);

    // perform pop front opertion
    cout<<"before pop front -> "<<d.size()<<endl;
    d.pop_front();
    cout<<"after pop front -> "<<d.size()<<endl;

    d.clear();
    cout<<"size of deque after clear -> "<<d.size()<<endl;
    
    return 0;
}