// Print binary
const bin = (n, width = 32) => (n >>> 0).toString(2).padStart(width, "0");
console.log(bin(22, 8)); // 00010110


// Check i-th bit (0-based from right)
const isSet = (n, i) => ((n >>> 0) & (1 << i)) !== 0;
console.log(isSet(13, 1))


// Count set bits (Brian Kernighan)
const bitCount = (n) => {
  n >>>= 0; let c = 0;
  while (n) { n &= n - 1; c++; }
  return c;
};


// Power of two?
const isPowerOfTwo = (n) => n > 0 && (n & (n - 1)) === 0;


// ×2 and ÷2 (bitwise)
const mul2 = (n) => (n << 1);           // watch 32-bit overflow
const div2 = (n) => (n >> 1);           // arithmetic shift (sign-extends)
const udiv2 = (n) => ((n >>> 1) >>> 0); // logical shift (unsigned)


// ASCII case tricks (A–Z only)
// lower = upper | 32; upper = lower & ~32
const toLowerAscii = (ch) => String.fromCharCode(ch.charCodeAt(0) | 32);
const toUpperAscii = (ch) => String.fromCharCode(ch.charCodeAt(0) & ~32);

// quick hacks mirroring your C++:
// 'C' | ' '  -> 'c'
String.fromCharCode('C'.charCodeAt(0) | ' '.charCodeAt(0));
// 'c' & '_'  -> 'C'
String.fromCharCode('c'.charCodeAt(0) & '_'.charCodeAt(0));

// alphabet position (A/a -> 1 … Z/z -> 26)
const alphaPos = (ch) => (ch.charCodeAt(0) & 31);


// XOR swap (educational; idiomatic JS uses destructuring)
let a = 4, b = 5;
a ^= b; b ^= a; a ^= b;
// Prefer: [a, b] = [b, a];


// Clear bits up to i
const clearLSBthroughI = (a, i) => a & ~((1 << (i + 1)) - 1); // zero 0..i
const keepOnlyLSBthroughI = (a, i) => a & ((1 << (i + 1)) - 1); // zero i+1..31


// Set “bitset” operations
const setUnion        = (A, B) => A | B;
const setIntersect    = (A, B) => A & B;
const setSubtract     = (A, B) => A & ~B;
const setNegation     = (A)    => ~A;
const setBit          = (A, k) => A | (1 << k);
const clearBit        = (A, k) => A & ~(1 << k);
const toggleBit       = (A, k) => A ^ (1 << k);
const testBit         = (A, k) => ((A >> k) & 1) !== 0;


// Last set bit: extract / remove
const lastBit     = (n) => (n & -n) >>> 0; // extract lowest set bit (unsigned)
const removeLast  = (n) => n & (n - 1);    // clear lowest set bit


// Two’s complement intuition in JS
const negate = (x) => (~x + 1) | 0; // equals -x for 32-bit ints






// PATTERNS

// Gray code
// n-bit Gray code sequence
const grayCode = (n) => Array.from({ length: 1 << n }, (_, i) => i ^ (i >> 1));

// Gray -> binary (reverse Gray)
const grayToBin = (g) => {
  let n = 0;
  while (g) { n ^= g; g >>= 1; }
  return n;
};


// Power of four
const isPowerOfFour = (n) => n > 0 && (n & (n - 1)) === 0 && n % 3 === 1;



// Maximum XOR of two numbers (greedy without trie)
const findMaximumXOR = (nums) => {
  let ans = 0;
  for (let bit = 31; bit >= 0; bit--) {
    const target = ans | (1 << bit);
    const seen = new Set();
    for (const x of nums) seen.add((x >> bit));
    // If ∃ a,b: (a^b) has this bit = 1 ⇔ for some p in seen, (p ^ target) ∈ seen
    let ok = false;
    for (const p of seen) { if (seen.has(p ^ target)) { ok = true; break; } }
    if (ok) ans = target;
  }
  return ans;
};



// DP + bitmask (assignment style)
// Min XOR sum pairing nums1[i] with some perm of nums2
const minXorSum = (a, b) => {
  const n = a.length, N = 1 << n;
  const dp = new Array(N).fill(Infinity);
  dp[0] = 0;
  for (let mask = 0; mask < N; mask++) {
    const i = bitCount(mask);               // how many chosen from b
    if (i >= n) continue;
    for (let j = 0; j < n; j++) if ((mask & (1 << j)) === 0) {
      const nxt = mask | (1 << j);
      dp[nxt] = Math.min(dp[nxt], dp[mask] + (a[i] ^ b[j]));
    }
  }
  return dp[N - 1];
};


// Enumerate all submasks of a mask
const submasks = (mask) => {
  const out = [];
  for (let sub = mask; sub; sub = (sub - 1) & mask) out.push(sub);
  out.push(0); // include zero
  return out;
};


// K-th bit helpers
const turnOffK = (n, k) => n & ~(1 << (k - 1));
const turnOnK  = (n, k) => n |  (1 << (k - 1));
const isKSet   = (n, k) => (n &  (1 << (k - 1))) !== 0;
const toggleK  = (n, k) => n ^  (1 << (k - 1));


// Rightmost set bit position (1-based)
const rightmostSetBitPos = (n) => (n & 1) ? 1 : Math.log2(n & -n) + 1;


// Min/Max without branching (bit trick; not idiomatic JS)
const findMin = (x, y) => y ^ ((x ^ y) & -(x < y));
const findMax = (x, y) => x ^ ((x ^ y) & -(x < y));



// JS-specific pitfalls to remember
const big = (1n << 50n) | 7n;
