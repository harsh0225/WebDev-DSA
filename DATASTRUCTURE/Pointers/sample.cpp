/*#include<iostream>
using namespace std;
 int main()
{
    int i = 3;
    int *p = &i;
    cout<<"operation *p -> "<<*p<<endl;
    cout<<"operation p -> "<<p<<endl;
    (*p)++;
    cout<<"operation (*p)++ is -> "<<*p<<endl;
    *p = *p + 1;
    cout<<"operation *p = *p + 1 -> "<<*p<<endl;
    p = p + 1;                                          
    cout<<"operation p = p + 1 -> "<< p <<endl;
} */
/* int main()
{
    int arr[10] = {1,2,3,4,5};
    cout<<"value at first loction -> "<<*arr<<endl;
    cout<<"value at second location -> "<<*(arr+1)<<endl;
    cout<<"addition of third index -> "<< *(arr+3) + 1<<endl;
    cout<<"addition of fourth index -> "<< *(arr+4) + 1<<endl;
    return 0;
} */
   
/* int main()
{
    int arr[10] ={1,2,3,4,5,6};
     cout<<"size of array -> "<<sizeof(arr)<<endl;
    cout<<"size of address of first element in array -> " <<sizeof(arr)<<endl;
    int *ptr = &arr[0];
    cout<<"size of address of arrays first element -> "<<sizeof(ptr)<<endl;
    cout<<"size of *ptr -> "<<sizeof(*ptr)<<endl;
    cout<<"size of ptr -> "<<sizeof(&ptr)<<endl; 
    int *ptr = arr;
    ptr =ptr + 1;
    cout<<*ptr;


    int val = 3;
    cout<<"int "<<sizeof(int)<<endl;
    cout<<"float "<<sizeof(float)<<endl;
    cout<<"double "<<sizeof(double)<<endl;
    cout<<"char "<<sizeof(char)<<endl;
    cout<<"long "<<sizeof(long)<<endl;
    return 0;
}     

int update(int x,int *p,int **p1)
{
    int y,z;
    **p1 += 1;
    y = **p1;
    *p += 2;
    z = *p;
    x +=3;
    return x+y+z;
}
int main()
{
    int c,*p,**p1;
    c=4;
    p=&c;
    p1=&p;
    cout<<update(c,p,p1);
}*/



#include<iostream>
using namespace std;

class circle
{
    private:
        float rad,area;
    public:
        circle()
        {
            rad=0;
        }
        circle(int r)
        {
            rad=r;
        }
        void show()
        {
            area = 3.14*rad*rad;
            cout<<"area of circle is -> "<<area<<endl;
        }
};

int main()
{
    circle c1;
    c1.show();
    circle c2(4);
    c2.show();
    return 0;
}