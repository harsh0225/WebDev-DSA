// SIEVE ERATOSTHENES THEOREM TO CALCULATE PEIME NUMBER
#include<iostream>
#include<vector>
using namespace std;

int sieve(int n)
{
    vector<bool> prime(n+1,true);
    prime[0] = prime[1] = false;
    int count = 2;
    for(int i=2;i<n;i++)
    {
        if(prime[i])
        {
            count++;
            for(int j=2*i;j<=n;j=j+i)
            {
                prime[j] = false;
            }
        }
    }
    return count;
}

int main()
{
    int n;
    cout<<"enter a number"<<endl;
    cin>>n;
    cout<<"prime number is -> "<<sieve(n)<<endl;
    return 0;
}