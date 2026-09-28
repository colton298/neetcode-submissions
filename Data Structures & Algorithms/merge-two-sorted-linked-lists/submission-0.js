/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //Question: Merge Two Sorted Linked Lists. Given the heads of two sorted linked lists, merge the two lists into one sorted linked list and return the head of the new sorted linked list. 
        /** Solution: Create a new linked list. 
         *  Iterate through both lists at the same time, checking which value is smaller and adding it to the new list. 
         *  Upon adding this new node, increment on the list the node is from until both are at null. **/
        
        //Initialize new linked list 
        const newList = { val: 0, next: null};
        let node = newList; 

        //While parameter lists still have nodes, iterate through param lists
        while ((list1 !== null) && (list2 !== null)) {
            if (list1.val < list2.val) { //If the first parameter list's value is smaller than the second's, add it's node to the new list 
                node.next = list1;
                list1 = list1.next;
            } else { //Otherwise add the second's node to the new list 
                node.next = list2;
                list2 = list2.next;
            }
            node = node.next; //Go to the next new list node
        }

        //Cleanup: When one list becomes empty, add the remaining nodes of the other list to the new list 
        if (list1) {
            node.next = list1;
        } else {
            node.next = list2;
        }

        return newList.next; 


    }
}
