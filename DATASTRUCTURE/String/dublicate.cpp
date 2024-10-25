/*
Write an efficient program to print all the duplicates and their counts in the input string 

Method 1: Using hashing

Algorithm: Let input string be “geeksforgeeks” 

Construct character count array from the input string.
count[‘e’] = 4 
count[‘g’] = 2
count[‘k’] = 2 
……

*/
#include<iostream>
using namespace std;
int main()
{
    char n[20];
    cout<<"Enter char array to cheack dublicate or not"<<endl;
    cin>>n;

    // store char index by repeat how many times
    int arr[26] = {0};
    for(int i=0;n[i]!='\0';i++)
    {
        int index = n[i] - 'a';
        arr[index]++;
    }
    
    // print the char repeat n times
    int max = 1;

    for(int i=0;i<26;i++)
    {
        if(arr[i]>max)
        {
            char newChar = i + 'a';
            cout <<"count['"<<newChar<<"'] = "<<arr[i]<<endl;
        }  
    }
    return 0;
}