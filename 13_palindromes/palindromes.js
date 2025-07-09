// function to check if a string is a palindrome or not
const palindromes = function (string) {
    // get the palindrome of the string and remove spaces and unwanted characters
  const palindrome = string.split("").reverse().join("").replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // get the string and remove spaces and unwanted characters
  string = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // check if the palindrome is the same as the string
  return palindrome === string
};

// Do not edit below this line
module.exports = palindromes;
