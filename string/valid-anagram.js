/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    const map = {};

    for (const elem of s) {
        map[elem] = map[elem] + 1 || 1;
    }

    for (const elem of t) {
        if (!map[elem]) return false;
        map[elem] -= 1
    }

    for (const key of Object.keys(map)) {
        if (map[key] != 0) return false;
    }

    return true;
};

const s = "anagram";
const t = "nagaram";

console.log(isAnagram(s, t));
