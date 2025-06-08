/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
    if (s.length !== goal.length || s.length < 2) return false;

    // If strings are equal, check for at least one duplicate character for a valid swap
    if (s === goal) {
        const uniqueChars = new Set(s);
        return uniqueChars.size < s.length;
    }

    const diffs = [];

    // Collect indices where characters differ
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diffs.push(i);
            if (diffs.length > 2) return false;
        }
    }

    // Must have exactly 2 differences, and they must be swappable
    return (
        s[diffs[0]] === goal[diffs[1]] &&
        s[diffs[1]] === goal[diffs[0]]
    );
};
