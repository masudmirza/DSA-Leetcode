/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let count = {0: 0, 1: 0, 2: 0};

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }

    let idx = 0;
    for (let color = 0; color < 3; color++) {
        let freq = count[color];
        for (let j = 0; j < freq; j++) {
            nums[idx] = color;
            idx++;
        }
    }   
};