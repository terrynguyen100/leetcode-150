/*

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

*/

//Approach 1: Using RegEx and for loop
// Time Complexity: O(n)
const isPalindrome = function(s) {
  const preparedStr = prepareStr(s);
  for (let i = 0; i < preparedStr.length/2; i++) {
      if (preparedStr[i] !== preparedStr[preparedStr.length-i-1])
          return false;
  }
  return true;
};

function prepareStr (inputStr) {
  const regex = /[\W_]/g;
  const preparedStr = inputStr.replace(regex, '').toLowerCase();
  return preparedStr;
};

//Approach 2: Using 2 pointers
// Time Complexity: O(n)
var isPalindrome = function(s){
  let left = 0, right = s.length - 1;
  while (left < right) {
      if (!isAlphaNumeric(s[left]))
          left++;
      else if (!isAlphaNumeric(s[right]))
          right--;
      else if (s[left].toLowerCase() !== s[right].toLowerCase())
          return false;
      else {
          left++;
          right--;
      }
  }
  return true;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}