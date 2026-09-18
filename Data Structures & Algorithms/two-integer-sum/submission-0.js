class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        //Question: TwoSum. Find two numbers in an array that add to the target 
        //Parameters nums (array), target (int)
        //Solution: Iterate through the array once, checking if the complement exists in the hashmap.
        //If complement already exists in hashmap, return current element and complement indecies. Else store current element in hashmap. 

        const usedMap = new Map(); //Initialize map 
        for (let i = 0; i < nums.length; i++ ) { //For each element in the array
            const complement = target - nums[i]; //Find complement of current value
            if (usedMap.has(complement)) { //If complement is in hashmap, return indecies of i and complement
                return [usedMap.get(complement), i];
            }

            usedMap.set(nums[i], i); //Else add i to hashmap and increment i 

        }

        return [];

    }
}
