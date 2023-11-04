/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numToIndex = {}; // Create a hash map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in numToIndex) {
      return [numToIndex[complement], i];
    }

    numToIndex[nums[i]] = i;
  }

  // If no solution is found, you can return an empty array or handle it as needed.
  return [];
};