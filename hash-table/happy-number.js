/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    const next = (x) => {
        let sum = 0;
        while (x > 0) {
        const d = x % 10;
        sum += d * d;
        x = (x / 10) | 0;
        }
        return sum;
    };

    while (n !== 1 && !seen.has(n)) {
        seen.add(n);
        n = next(n);
    }
    return n === 1;
};

console.log(isHappy(19));
