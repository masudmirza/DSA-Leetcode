/**
 * @param {string} word
 * @return {number}
 */
function countVowelSubstrings(word) {
  const idx = (ch) => {
    if (ch === 'a') return 0;
    if (ch === 'e') return 1;
    if (ch === 'i') return 2;
    if (ch === 'o') return 3;
    if (ch === 'u') return 4;
    return -1; // consonant
  };

  const cnt = [0, 0, 0, 0, 0]; // counts for a,e,i,o,u
  let distinct = 0;
  let startAll = 0;      // after last consonant (so window is vowels-only)
  let startAtMost4 = 0;  // left boundary for "at most 4 distinct vowels"
  let ans = 0;

  for (let r = 0; r < word.length; r++) {
    const k = idx(word[r]);

    if (k === -1) {
      // Hit a consonant: reset state
      cnt.fill(0);
      distinct = 0;
      startAll = startAtMost4 = r + 1;
      continue;
    }

    // expand to include current vowel
    if (++cnt[k] === 1) distinct++;

    // shrink startAtMost4 until we have at most 4 distinct vowels
    while (distinct > 4) {
      const leftK = idx(word[startAtMost4]);
      cnt[leftK]--;
      if (cnt[leftK] === 0) distinct--;
      startAtMost4++;
    }

    // exactly 5 distinct = (at most 5) - (at most 4) = startAtMost4 - startAll
    ans += startAtMost4 - startAll;
  }

  return ans;
}

console.log(countVowelSubstrings("aeiouu"));
console.log(countVowelSubstrings("unicornarihan"));
console.log(countVowelSubstrings("cuaieuouac"));
