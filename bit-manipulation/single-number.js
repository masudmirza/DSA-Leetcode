/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;

    for (let num of nums) {
        result ^= num;
    }

    return result;
};

const input = [1,2,2,1,3];
console.log(singleNumber(input));
