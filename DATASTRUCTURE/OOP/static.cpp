#include<iostream>
using namespace std;

class student
{
    int roll;
    public:
      static int count;
      static void random()
        {
            cout<<count<<endl;
        }
};

int student::count = 5;
int main()
{
    student::random();
    cout<<student::count;
    return 0;
}