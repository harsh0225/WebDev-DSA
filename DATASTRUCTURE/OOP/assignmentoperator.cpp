/*
we can copy one objet to another using assignment operator
*/

#include<iostream>
using namespace std;
class student
{
    public:
        int r;
        char *name;
        student()
        {
            name = new char[100];
        }
        void getdata()
        {
            r = 10;
            strcpy(name,"harsh");
        }
        void print()
        {
            cout<<"[ roll : "<<r<<" , name : "<<name<<" ]"<<endl<<endl;
        }
};

int main()
{
    student s1;
    s1.getdata();
    s1.print();
    student s2;

    s2 = s1;
    
    s2.print();
    return 0;
}