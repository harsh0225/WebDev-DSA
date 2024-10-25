// vector is used dynamic memory to store the element
// the vector is created then the capacity of vector is zero
// when we can push the element in vector , vector can be double their capacity
// when we increse the memory in run time vector create copy and then add element
// we can clear vector then their size will be zero not their capacity
// size = how the element in vector
// capacity = how memory space assign to the vector 

#include<iostream>
#include<vector>
using namespace std;
int main()
{
    vector<int> a ;       // we can also initialize the size of vector like //  vector<int> a(5); 
                        // for copy one vector to the another vector // vector<int> b(a);
    cout<<"capacity of vector-> "<<a.capacity()<<endl;

    a.push_back(1);
    cout<<"capacity of vector-> "<<a.capacity()<<endl;

    a.push_back(2);
    cout<<"capacity of vector-> "<<a.capacity()<<endl;

    a.push_back(3);
    cout<<"capacity of vector-> "<<a.capacity()<<endl<<endl;

    cout<<"before pop_bak()"<<endl;

    for(int i=0;i<a.size();i++)
    {
        cout<<a[i]<<"  ";
    }

    a.pop_back();

    cout<<endl<<endl<<"after pop_back()"<<endl;

     for(int i=0;i<a.size();i++)
    {
        cout<<a[i]<<"  ";
    }
    cout<<endl<<endl<<"cpacity of vector-> "<<a.capacity()<<endl;
    cout<<"size of vector is-> "<<a.size()<<endl;
    return 0;
}