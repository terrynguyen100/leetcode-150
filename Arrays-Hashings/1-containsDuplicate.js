/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

// Aprroach 1: Using Object/Hashmap
// Time Complexity: O(n) due to the for...of loop
const containsDuplicate = function(nums) {
  const uniqueNums = {};
  for (const num of nums) {
      if (uniqueNums[num] == true) {
          return true;
      } else {
          uniqueNums[num] = true;
      }
  }
  return false;
};

//Approach 2: Using Set
// Time Complexity: O(n) due to the Set data structure
const containsDuplicate = function(nums) {
  const setNums = new Set(nums);
  return setNums.size !== nums.length;
}