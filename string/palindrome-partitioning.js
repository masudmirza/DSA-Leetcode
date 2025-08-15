/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    const isPalindrome = (s, left, right) => {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    const result = [];

    const backtrack = (start, path) => {
        if (start === s.length) {
            result.push([...path]);
            return;
        }

        for (let end = start; end < s.length; end++) {
            if (isPalindrome(s, start, end)) {
                path.push(s.slice(start, end + 1));
                backtrack(end + 1, path);
                path.pop();
            }
        }
    }

    backtrack(0, []);
    return result;
};

const input1 = "aab";
console.log(partition(input1));
