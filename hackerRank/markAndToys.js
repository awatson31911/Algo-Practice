function maximumToys(prices, k) {
  let toyCount = 0;
  let priceTotal = 0;
  let i = 0;
  prices.sort((a,b) => a - b);
  console.log(prices)

  while (priceTotal <= k) {
      const toyPrice = prices[i];
      priceTotal += toyPrice;

      if (priceTotal > k) break;
      else {
          toyCount++;
          i++;
      }
  }

  return toyCount;

}