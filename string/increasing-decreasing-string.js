/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    const count = new Array(26).fill(0);

    // Build frequency count
    for (let char of s) {
        count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    
    const result = [];
    const totalLength = s.length;
    
    while (result.length < totalLength) {
        // Step 1: increasing order
        for (let i = 0; i < 26; i++) {
            if (count[i] > 0) {
                result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
                count[i]--;
            }
        }

        // Step 2: decreasing order
        for (let i = 25; i >= 0; i--) {
            if (count[i] > 0) {
                result.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
                count[i]--;
            }
        }
    }
    
    return result.join('');
};

const input = "aaaabbbbcccc"
console.log(sortString(input));
