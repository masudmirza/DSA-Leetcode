/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let max = '';
    
    for (let i=num.length - 1; i>=0; i--) {
        if (Number(num[i]) % 2 !== 0) {
            max = num.slice(0, i+1);
            break;
        }
    }

    return max;
};

const input = '35427';
console.log(largestOddNumber(input));
