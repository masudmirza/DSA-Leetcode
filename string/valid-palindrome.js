/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Move left pointer to next alphanumeric
        while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        // Move right pointer to previous alphanumeric
        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }

        // Compare characters (case-insensitive)
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};

// Helper function to check alphanumeric
function isAlphaNumeric(c) {
    const code = c.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) || // 0-9
        (code >= 65 && code <= 90) || // A-Z
        (code >= 97 && code <= 122)   // a-z
    );
}

const input = 'A man, a plan, a canal: Panama';
console.log(isPalindrome(input));

// Space complexity - O(1)
// Time complexity - O(n)