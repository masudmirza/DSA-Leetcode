/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     const answers = [];

//     for (let i=0; i<nums.length; i++) {
//         let multiply = 1;
//         for (let j=0; j<nums.length; j++) {
//             if (i===j) continue;
//             multiply *= nums[j];
            
//             if (j === nums.length - 1 || (i === nums.length -1 && j === i - 1) ) {
//                 answers.push(multiply);
//                 multiply = 1;
//             }
//         }
//     }

//     return answers;
// };

function productExceptSelf(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(1);

//   console.log('ans ', ans);

  let left = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = left;
    left *= nums[i];
    // console.log('i ', i);
    // console.log('ans ', ans);
    // console.log('left ', left);
  }

  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= right;
    right *= nums[i];

    // console.log('i ', i);
    // console.log('ans ', ans);
    // console.log('right ', right);
  }

  return ans;
}

const input = [1,2,3,4];
console.log(productExceptSelf(input));