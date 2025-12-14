/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode(0);

    let current = result;
    let n = 0;

    while (l1 !== null || l2 !== null || n !== 0){
        const value1 = l1 ? l1.val : 0;
        const value2 = l2 ? l2.val : 0;

        const sum = value1 + value2 + n;

        n = Math.floor(sum/10);

        const dig = sum % 10;

        current.next = new ListNode(dig);
        current = current.next;

        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    return result.next;
};