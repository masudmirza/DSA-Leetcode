/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//   if (s.length === 0) return 0;

//   let current = "";
//   let bestLen = 0;

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const dupIdx = current.indexOf(char);

//     if (dupIdx === -1) {
//       current += char;
//     } else {
//       current = current.slice(dupIdx + 1) + char;
//     }

//     if (current.length > bestLen) bestLen = current.length;
//   }

//   return bestLen;
// };

var lengthOfLongestSubstring = function(s) {
  let left = 0, best = 0;
  const seen = new Set();

  for (let right = 0; right < s.length; right++) {
    while (seen.has(s[right])) {
      seen.delete(s[left]);
      left++;
    }
    seen.add(s[right]);
    best = Math.max(best, right - left + 1);
  }
  return best;
};

const input = 'dvdf';
console.log(lengthOfLongestSubstring(input));
