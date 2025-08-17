/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let n = (x ^ y) >>> 0;
    let cnt = 0;
    while (n) {
        n &= n - 1;
        cnt++;
    }
    return cnt;
};