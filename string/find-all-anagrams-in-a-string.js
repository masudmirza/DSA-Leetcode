/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  const n = s.length, m = p.length;
  if (m > n) return [];

  // counts of needed chars from p
  const need = new Array(26).fill(0);
  for (const ch of p) need[ch.charCodeAt(0) - 97]++;

  const res = [];
  let left = 0;
  let matched = 0; // number of characters currently satisfying need (total across all chars)

  for (let right = 0; right < n; right++) {
    const r = s.charCodeAt(right) - 97;

    // if we still need this char, taking it increases matched
    if (need[r] > 0) matched++;
    need[r]--; // consume one (can go negative if extra)

    // keep window size == m
    if (right - left + 1 > m) {
      const l = s.charCodeAt(left) - 97;
      // putting char back: if it becomes > 0, we just lost a matched char
      if (need[l] >= 0) matched--;
      need[l]++; // restore
      left++;
    }

    if (right - left + 1 === m && matched === m) res.push(left);
  }

  return res;
};


const s = 'cbaebabacd';
// const s = 'abab';
const p = 'abc';
// const p = 'ab';
console.log(findAnagrams(s, p));
