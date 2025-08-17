/**
 * @param {number} n
 * @return {number[]}
 */

// Dynamic Programming with Bit Manipulation
// In this approach, we exploit the fact that shifting a number to the right by one bit (i.e., dividing by 2) 
// removes the last bit. So, the number of 1's in the binary representation of i is the same as i/2 plus the last bit of i.
// In the first method, we use bitwise shift and AND operations. Bitwise right shifting i >> 1 essentially removes the last bit,
// and i & 1 extracts the last bit. This helps us compute the result for i using previously computed results.

function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1);
  }
  return ans;
}


// Dynamic Programming with Offset
// The second method utilizes a fascinating property of binary numbers, where numbers i and i + 2^k
// share the same number of 1's, except for an additional 1 at the k-th bit for i + 2^k.
// The second approach introduces the concept of an "offset," which is a power of 2.
// We use this offset to calculate the number of 1's for new numbers based on previously calculated results.

function countBits2(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) ans[i] = ans[i & (i - 1)] + 1;
  return ans;
}

console.log(countBits(2));
console.log(countBits2(5));
