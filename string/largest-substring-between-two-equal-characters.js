/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    const map = {};

    for (let i=0; i<s.length; i++) {
        if (map[s[i]]) {
            map[s[i]].push(i)
        } else {
            map[s[i]] = [i]
        }
    }

    let maxDiff = 0;


    for (const key in map) {
        const positions = map[key];
        const diff = Math.max(...positions) - Math.min(...positions);
        maxDiff = Math.max(maxDiff, diff);
    }

    return maxDiff - 1;
};

// slightly more optimal and clean version
var maxLengthBetweenEqualCharacters2 = function(s) {
    const firstIndex = {};
    let maxLen = -1;

    for (let i = 0; i < s.length; i++) {
        if (firstIndex[s[i]] !== undefined) {
            maxLen = Math.max(maxLen, i - firstIndex[s[i]] - 1);
        } else {
            firstIndex[s[i]] = i;
        }
    }

    return maxLen;
};


const input = "mgntdygtxrvxjnwksqhxuxtrv";
console.log(maxLengthBetweenEqualCharacters2(input));
