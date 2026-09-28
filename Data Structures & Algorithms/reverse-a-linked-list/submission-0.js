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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        //Question: Given the head of a singly linked list, return the head to a reversed version of that list. 
        //Solution: Iterate through the list, changing the direction step by step using three pointers.

        let previous = null; //Tracks the node before current 
        let current = head; //Tracks the current node
        let nextNode = null; //Temporarily holds the next node 

        while (current !== null) {
            nextNode = current.next; //Save the next node 
            current.next = previous; //Reverse the pointer (point backwards)
            previous = current; //Move the previous pointer one step forward
            current = nextNode; //Move the current pointer one step forward
        }

        return previous; //After the loop, previous will be pointing to the new head 
    }
}
