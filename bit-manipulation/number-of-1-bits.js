/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    n >>>= 0;
    let c = 0;

    while(n) {
        n &= n -1;
        c++;
    }

    return c;
};