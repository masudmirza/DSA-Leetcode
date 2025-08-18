/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const frequency = new Map();
    let longest = 0;
    
    for (const num of nums) frequency.set(num, (frequency.get(num) || 0) + 1);

    for (const [i, k] of frequency) {
        if (frequency.has(i + 1)) {
            longest = Math.max(longest, k + frequency.get(i + 1))
        }
    }

    return longest;
};

console.log(findLHS([1,3,2,2,5,2,3,7]));
