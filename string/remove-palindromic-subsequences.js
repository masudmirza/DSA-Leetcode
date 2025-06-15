/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if (!s?.length) return 0;

    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    return isPalindrome(s) ? 1 : 2;
}

const input = 'abbaaaabbaabbbbbbbaa';
console.log(removePalindromeSub(input));
