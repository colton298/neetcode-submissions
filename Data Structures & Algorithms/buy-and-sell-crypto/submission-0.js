class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        //Question: Best Time to Buy and Sell Stock. Find the most profitable day given an array of stock price values in order to buy a stock for max profit when selling it. 
        //Solution: Initialize two values: minBuy as the first index value, and maxProfit = 0. For each value in the array, update maxP with current value - minBuy and update minBuy if the price is smaller. Return maxP after scanning the array. 
        //Set maxProfit = 0 (if no profit is achieveable, do not buy) and minBuy to first val in array 
        let maxProfit = 0;
        let minBuy = prices[0];

        for (let i = 0; i < prices.length; i++){ 
            maxProfit = Math.max(maxProfit, prices[i] - minBuy); //For each value in array, set MaxProfit to be the same or (the current price - minBuy) if that is greater
            minBuy = Math.min(minBuy, prices[i]); //For each value in the array, set minBuy to be the same or the current price if it is smaller. 
        }
        return maxProfit;
    }
}
