const stock = (prices) => {
  let profit = 0;
  let buyStock = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (buyStock > prices[i]) {
      buyStock = prices[i];
    }
    let currentProfit = prices[i] - buyStock;
    if (currentProfit > profit) {
      profit = currentProfit;
    }
  }
  console.log(profit);
};

stock([7, 1, 5, 3, 6, 4]);
