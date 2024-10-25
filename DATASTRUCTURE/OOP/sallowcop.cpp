#include<iostream>
using namespace std;
class student
{
    public:
        int *r ;
        char *name;
        student()
        {
            r = new int;
            name = new char[100];
        }
        student(student &temp)
        {
            r = temp.r;
            name = temp.name;
        }
        void setdata()
        {
            *r = 10;
            strcpy(name,"harsh");
        }
        void print()
        {
           cout<<"[ roll : "<<*r<<" , name : "<<name<<" ]"<<endl<<endl;
        }
};  

int main()
{
    student s1;
    s1.setdata();
    s1.print();

    student s2(s1);
    s2.print();

    s1.name[0] = 's';
   
    s1.print();

    s2.print();

}