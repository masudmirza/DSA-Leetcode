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

    let canBreak1 = true;
    let canBreak2 = true;

    for (let i = 0; i < sortedS1.length; i++) {
        if (sortedS1[i] > sortedS2[i]) {
            canBreak2 = false;
        } else {
            canBreak1 = false;
        }
    }

    return canBreak1 || canBreak2;
};

console.log(checkIfCanBreak("leetcodee", "interview"));
