/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {};
    let result = 0;
    let majority = 0;

    for (let n of nums) {
        hash[n] = 1 + (hash[n] || 0);
        if (hash[n] > majority) {
            result = n;
            majority = hash[n];
        }
    }

    return result;
};

const input = [2,2,1,1,1,2,2];
console.log(majorityElement(input));