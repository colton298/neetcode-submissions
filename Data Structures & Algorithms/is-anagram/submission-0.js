class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        //Question: Is Anagram. Check if two strings contain the same letters the same amount of times.
        //Solution: first check if the strings are the same length, then initialize an array of length 26 of values 0.
        //Then increment the index value of each letter in string s each time it appears. Do the same but decrementing for t. 
        //If the array is all 0s, they are anagrams, otherwise they are not. 

        if (s.length !== t.length) return false; //If the lengths of the strings are unequal they are not anagrams, return false 
        let count = new Array(26).fill(0); //Initialize array of length 26 with all 0s
        for (let i = 0; i < s.length; i++) { //For each letter in the strings 
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)]++; //Add 1 at the index of each letter when it appears in s. charCodeAt() converts character to a number, subtracting 'a' turns those indexes into 0-25. 
            count[t.charCodeAt(i) - 'a'.charCodeAt(0)]--; //Decrement 1 at the index of each letter when it appears in t
        }
        return count.every((val) => val === 0); //Return true if all values in the array are 0, otherwise false 
    }
}