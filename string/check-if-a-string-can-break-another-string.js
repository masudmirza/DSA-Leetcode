/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    const sortedS1 = s1.split('').sort();
    const sortedS2 = s2.split('').sort();

    let s1BreaksS2 = true;
    let s2BreaksS1 = true;

    for (let i = 0; i < sortedS1.length; i++) {
        if (sortedS1[i] < sortedS2[i]) {
            s1BreaksS2 = false;
        }
        if (sortedS2[i] < sortedS1[i]) {
            s2BreaksS1 = false;
        }
    }

    return s1BreaksS2 || s2BreaksS1;
};

console.log(checkIfCanBreak("leetcodee", "interview"));
console.log(checkIfCanBreak("yopumzgd", "pamntyya"));
