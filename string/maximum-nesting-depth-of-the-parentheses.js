/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            depth++;
        } else if (s[i] === ')') {
            depth--;
        }
        max = Math.max(max, depth);
    }

    return max;
};

const input = '(1)+((2))+(((3)))';
console.log(maxDepth(input));
