/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let depth = 0;
    let result = '';

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            depth++;
            if (depth > 1) result += s[i];
        } else {
            depth--;
            if (depth >= 1) result += s[i];
        }
    }

    return result;
};

const input = '(()())(())(()(()))';
console.log(removeOuterParentheses(input));
