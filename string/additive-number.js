/**
 * @param {string} num
 * @return {boolean}
 */
var isAdditiveNumber = function(num) {
  const n = num.length;

  // Try all possible splits for the first and second number
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    for (let j = i + 1; j < n; j++) {
      const num1 = num.slice(0, i);
      const num2 = num.slice(i, j);

      // Skip if either number has leading zeros (e.g., "01", "099")
      if ((num1.length > 1 && num1.startsWith('0')) || 
          (num2.length > 1 && num2.startsWith('0'))) {
        continue;
      }

      // Check if the remaining string follows the additive sequence
      if (isValid(BigInt(num1), BigInt(num2), num.slice(j))) {
        return true;
      }
    }
  }

  return false; // No valid additive sequence found
};

function isValid(num1, num2, remaining) {
  while (remaining.length > 0) {
    const sum = (num1 + num2).toString();

    // If remaining string doesn't start with the expected sum, fail
    if (!remaining.startsWith(sum)) return false;

    // Advance the sequence
    remaining = remaining.slice(sum.length);
    num1 = num2;
    num2 = BigInt(sum);
  }

  return true; // Entire string matched the additive sequence
}

const input1 = "112358";
const input2 = "199100199";
const input3 = "1023"; 
console.log(isAdditiveNumber(input1));
console.log(isAdditiveNumber(input2));
console.log(isAdditiveNumber(input3));