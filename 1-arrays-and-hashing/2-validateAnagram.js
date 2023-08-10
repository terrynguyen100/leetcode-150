/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

//Aproach 1: Using Object/Hashmap
// Time Complexity: O(3n)
const isAnagram = (s, t) => {
  // O(1) - Constant time complexity
  if (s.length !== t.length) {
      return false;
  }

  const charCount = {};
  // O(n)
  for (const char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  // O(n)
  for (const char of t) {
      if (!charCount[char]) {
          return false;
      }
      charCount[char]--;
  }

  // O(n)
  for (const key in charCount) {
      if (charCount[key] != 0)
          return false
  }
  return true;
};
