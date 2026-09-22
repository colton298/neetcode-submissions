class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //Question: Valid Palindrome: Given a string s, return true if it is a palindrome (same forwards and backwards), otherwise return false.
        /**Solution: Normalize string, find legnth of string.
         * Iterate through the string, checking each index against the element at index (length - 1 - i).
         * If these elements are unequal, return false. After iteration, return true.  
         **/
        

        s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); //Normalize string capitalization and remove punctuation 
        let length = s.length; //Find the length of the string
        for (let i = 0; i < (length/2); i++) { //Iterate through the string, checking each element until the middle point. 
            if (s[i] !== s[length - 1 - i]) return false;
        }
        return true; 

    }
}
