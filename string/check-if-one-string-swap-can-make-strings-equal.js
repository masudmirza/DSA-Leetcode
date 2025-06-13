/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;
    let temp = s2;

    for (let i=0; i<s2.length; i++) {
        for (let j=i+1; j<s2.length; j++) {
            const arr = temp.split("");
            const tempI = arr[i];
            arr[i] = arr[j];
            arr[j] = tempI;
            if (arr.join("") === s1) return true;
        }
    }

    return false;
};

var areAlmostEqual2 = function(s1, s2) {
    if (s1.length != s2.length) return false;
    if (s1 === s2) return true;
    
    let diff = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) diff.push(i);
        if (diff.length > 2) return false;
    }

    return s1[diff[0]] === s2[diff[1]] && s1[diff[1]] === s2[diff[0]];
};

const s1 = "bank";
const s2 = "kanb";
console.log(areAlmostEqual2(s1, s2));
