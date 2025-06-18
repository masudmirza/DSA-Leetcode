/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    const stack = [];
    let score = 0;

    for (let i=0; i<s.length; i++) {
        if (s[i] === '(') {
            stack.push(score);
            score = 0;
        } else if (s[i] === ')') {
            if (score === 0) score = 1;
            else score *= 2;
            score += stack.pop();
        }
    }

    return score;
};

const input = '()(()(()))';
console.log(scoreOfParentheses(input));
