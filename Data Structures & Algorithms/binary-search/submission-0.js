class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        //Question: Binary Search. Implement a function search to find target within nums, an ascending sorted array. Return its index (or -1 if not found). Solution must be in O(logn) time. 
        //Solution: Implement standard binary search: Find middle of the array by finding (left+right)/2. If the middle is the target, return index.
        //Otherwise, determine if the target is greater or lesser than the middle of the array, and set either left or right to be the new mid. 
        
        //Initialize left as first index and right as last index 
        let left = 0; 
        let right = nums.length - 1;

        //While the left value does not surpass right
        while (left <= right) {
            //Set mid
            let mid = Math.floor((left+right) /2);

            //If mid is target return index of mid 
            if (nums[mid] === target) {
                return mid; 
            } else if (nums[mid] < target) { //If mid is less than target set left to mid (increase left)
                left = mid + 1;
            } else { //If mid is greater than target set right to mid (decrease right)
                right = mid - 1;
            }
        }
    
        return -1; //If target not in array after searching the array 

    }
    


}
