/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;

  let current = "";
  let bestLen = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const dupIdx = current.indexOf(char);

    if (dupIdx === -1) {
      current += char;
    } else {
      current = current.slice(dupIdx + 1) + char;
    }

    if (current.length > bestLen) bestLen = current.length;
  }

  return bestLen;
};


const input = 'dvdf';
console.log(lengthOfLongestSubstring(input));
