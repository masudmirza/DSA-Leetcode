/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]} // indices
 */
var twoSum = function(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const need = target - x;

    if (seen.has(need)) {
      return [seen.get(need), i];
    }
    seen.set(x, i);
  }
  
  return [];
};
