/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length != t.length) return false;

    const mapS = {};
    const mapT = {};

    for (let i=0; i<s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (!mapS[charS]) {
            mapS[charS] = charT;
        } else {
            if (mapS[charS] != charT) return false;
        }

        if (!mapT[charT]) {
            mapT[charT] = charS;
        } else {
            if (mapT[charT] != charS) return false;
        }
    }

    return true;
};

const s = "badc";
const t = "baba";

console.log(isIsomorphic(s, t));
