/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  if (nums.length === 0) return 0;

  let endHere = nums[0];
  let best = nums[0];

  for (let i = 1; i < nums.length; i++) {
    endHere = Math.max(nums[i], endHere + nums[i]);
    best = Math.max(best, endHere);
  }

  return best;
}

const input = [5,4,-1,7,8];
console.log('maxSubArray ', maxSubArray(input));
