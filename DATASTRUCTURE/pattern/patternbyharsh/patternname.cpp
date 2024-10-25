// print the following pattern
#include<iostream>
using namespace std;
int main()
{
    cout<<"\n\n\n\n";
    for(int i=1;i<=10;i++)
    {
        
        //for  H

        for(int j=1;j<=2;j++)
        {
            cout<<"*";
        }
        for(int k=i;k<=10;k++)
        {
            if(i==5 || i==6)
            {
                for(int o=1;o<=8;o++)
                {
                    cout<<"*";
                }
                break;
            }
            for(int m=1;m<=8;m++)
            {
                cout<<" ";
            }
            break;
        }
        for(int l=1;l<=2;l++)
        {
            cout<<"*";
        }

        // for A


        for(int p=13;p>=i;p--)
        {
            cout<<" ";
        }
        for(int q=1;q<=2;q++)
        {
            cout<<"*";
        }
        if(i!=1)
        {
        
            
                if(i<=4)
                {
                    for(int t=1;t<=i*2-2;t++)
                    {
                        cout<<" ";
                    }
                }   
                else
                {
                    if(i>4 && i<7)
                    {
                        for(int u=1;u<=i*2-2;u++)
                        {
                            cout<<"*";
                        }   
                    
                    }
                    else
                    {
                        for(int v=1;v<=i*2-2;v++)
                        {
                            cout<<" ";
                        }
                    }
                }
            
        }   
        for(int w=1;w<=2;w++)
        {
            cout<<"*";
        }
        for(int p=13;p>=i;p--)
        {
            cout<<" ";
        } 

        //for R


        for(int x=1;x<=2;x++)
        {
            cout<<"*";
        }
        if(i<=2)
        {
            for(int y=1;y<=8;y++)
            {
                cout<<"*";
            }
        }
        if(i>2 && i<5)
        {
            for(int z=1;z<=8;z++)
            {
                cout<<" ";
            }
        }
        if(i>4 && i<7)
        {
            for(int a=1;a<=8;a++)
            {
                cout<<"*";
            }
        }
        if(i<7)
        {
            for(int f=1;f<=2;f++)
            {
                cout<<"*";
            }
        }
        if(i>6 && i<11)
        {
            if(i>6 && i<11)
            {
                for(int e=0;e<=(i-7)+3;e++)
                {
                    cout<<" " ;
                }
            }
            for(int b=1;b<=3;b++)
            {
                cout<< "*";
            }
            for(int b5=3;b5>=i-6;b5--)
            {
                cout<<" ";
            }

        }


        // for S


       for(int g=1;g<=2;g++)
       {
            cout<<"    ";
       }
       if(i<=2)
       {
            for(int h=1;h<=10;h++)
            {
                cout<<"*";
            }
       }
       if(i>2 && i<5)
       {
            for(int a1=1;a1<=2;a1++)
            {
                cout<<"*";
            }
            for(int b1=1;b1<=8;b1++)
            {
                cout<< " ";
            }
       }
       if(i>4 && i<7)
       {
            for(int h=1;h<=10;h++)
            {
                cout<<"*";
            }
       }
       if(i>6 && i<9)
       {
            for(int a3=1;a3<=8;a3++)
            {
                cout<<" ";
            }
            for(int a4=1;a4<=2;a4++)
            {
                cout<<"*";
            }
       }
       if(i>8 && i<11)
       {
            for(int a5=1;a5<=10;a5++)
            {
                cout<<"*";
            }
       }
       for(int b2=1;b2<=2;b2++)
       {
            cout<<"   ";
       }

       // for H


       for(int j=1;j<=2;j++)
        {
            cout<<"*";
        }
        for(int k=i;k<=10;k++)
        {
            if(i==5 || i==6)
            {
                for(int o=1;o<=8;o++)
                {
                    cout<<"*";
                }
                break;
            }
            for(int m=1;m<=8;m++)
            {
                cout<<" ";
            }
            break;
        }
        for(int l=1;l<=2;l++)
        {
            cout<<"*";
        }
         cout<<"\n";
    }
    cout<<"\n\n\n\n";
}