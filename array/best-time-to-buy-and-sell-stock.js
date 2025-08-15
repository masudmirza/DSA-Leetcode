/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
  if (!Array.isArray(prices) || prices.length < 2) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    const profit = p - minPrice;
    if (profit > maxProfit) maxProfit = profit;
    if (p < minPrice) minPrice = p;
  }

  return maxProfit;
}

const input = [7,6,4,3,1];
console.log(maxProfit(input));
