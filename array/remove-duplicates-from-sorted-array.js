/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    console.log('unique array ', nums.slice(0, k));

    return k;
};

const input1 = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(input1));

const input2 = [1,1,2];
console.log(removeDuplicates(input2));

