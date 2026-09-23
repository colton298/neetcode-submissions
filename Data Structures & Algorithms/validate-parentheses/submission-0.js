class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        //Question: Valid Parentheses. Given a string s consisting of combinations of (){}[], check if the string is valid. The string is valid if every open bracket is closed by the same type of close bracket, open brackets are closed in the correct order, every close bracket has a corresponding open bracket of the same type. 
        //Solution: Use a stack to pop when a closed bracket is found and not preceded by an open bracket. 
        let stack = []; //Initialize stack 
        for (let i = 0; i < s.length; i++) { //Iterate through each element of the string 
            let currentElement = s[i];
            if (currentElement === '(' || currentElement === '[' || currentElement === '{'){ //If current element is an open parentheses, push to the top of the stack 
                stack.push(currentElement);
            } else { //Otherwise, check if the current top is of the same kind of parentheses but open 
                let currentTop = stack[stack.length - 1];
                if (
                (currentElement === ')' && currentTop === '(') ||
                (currentElement === ']' && currentTop === '[') ||
                (currentElement === '}' && currentTop === '{')) {
                    stack.pop(); //Pop when the parentheses match and close 
                } else { //If neither of these cases occur, the string contains mismatching parentheses, and return false. 
                    return false;
                }
            }
        }
    return stack.length === 0; //If the stack length is 0 after popping all matching closed parentheses, return true. Else return false 
    }

}