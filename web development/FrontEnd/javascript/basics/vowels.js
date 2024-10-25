// function to count the number of vowels in a string
function countVowels(str) {
    // define an array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
  
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // check if the character is a vowel
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    // return the number of vowels
    return count;
  }
  
  // test cases
  console.log(countVowels("CodeHelp")); // output: 3
  console.log(countVowels("hello")); // output: 2
  console.log(countVowels("world")); // output: 1
  console.log(countVowels("aeiou")); // output: 5
  console.log(countVowels("JavaScript")); // output: 3
  console.log(countVowels("Pranay")); // output: 2