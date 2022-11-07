// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// 
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// 
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

bestTime([7, 1, 5, 3, 6, 4]);

const bestTime = prices => {
  let profit = 0;
  let buyStock = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (buyStock > prices[i]) {
      buyStock = prices[i];
      let currentProfit = prices[i] - buyStock;
      if (currentProfit > profit) {
        profit = currentProfit;
      }
    }
  }
  return profit
}