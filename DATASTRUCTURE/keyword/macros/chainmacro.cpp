/*
Chain Macros: Macros inside macros are termed 
as chain macros. In chain macros first of all parent 
macro is expanded then the child macro is expanded. 
Below is the illustration of a Chain Macro:
*/

// C program to illustrate macros
#include <stdio.h>
  
// Macro definition

#define FOLLOWERS 138
#define INSTAGRAM FOLLOWERS 
 
// Driver Code
int main()
{
    // Print the message
    printf("Geeks for Geeks have %dK"
           " followers on Instagram",
           INSTAGRAM);
  
    return 0;
}