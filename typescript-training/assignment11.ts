let prices: number[] = [1, 6, 4, 3, 10];

let minPrice: number = prices[0];
let maxProfit: number = 0;

for (const price of prices) {
  if (price < minPrice) {
    minPrice = price;
  } else {
    const profit = price - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }
}

console.log("Max Profit:", maxProfit);