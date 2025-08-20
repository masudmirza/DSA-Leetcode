/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [];
    const result = [];

    for (const char of s) {
        if (char === '(') {
            stack.push(result.length)
            result.push(char);
        } else if (char === ')') {
            if (stack?.length) {
                stack.pop();
                result.push(char);
            }
        } else {
            result.push(char);
        }
    }

    for (let i = stack.length - 1; i >= 0; i--) {       
        result.splice(stack[i], 1);
    }

    return result.join("");
};

// const input = 'lee(t(c)o)de)';
const input = '())()(((';
console.log(minRemoveToMakeValid(input));
