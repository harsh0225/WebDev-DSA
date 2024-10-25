#include<iostream>
using namespace std;

class base
{
    public:
        virtual void show()=0;  
};

class derived:public base
{
    public:
        void show()
        {
            
        }   
};

int main()
{
    derived d;
}