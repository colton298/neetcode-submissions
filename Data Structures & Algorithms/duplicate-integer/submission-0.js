class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //Question: Contains Duplicate. Return true if any value appears more than once in the array.
        //Parameters: nums (array)
        //Solution: Create a hashset to store seen values, check each value against hashset.
        //If value is in hashset, return true, otherwise add to hashset. Return false after this loop

        const seen = new Set(); //Initialize hashset

        for (let i = 0; i < nums.length; i++) { //For each index in nums array 
            if (seen.has(nums[i])) return true; //If seen value, return true. 
            else seen.add(nums[i]); //Else add value to hashset
        }
        return false; //Upon reaching the end of the loop, return false. 
    }
}
