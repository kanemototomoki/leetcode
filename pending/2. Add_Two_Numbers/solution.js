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
  const val1 = Number(l1.reverse().join(''));
  const val2 = Number(l2.reverse().join(''));

  return String(val1 + val2).split('').reverse().map((v) => Number(v));
};

console.log(addTwoNumbers([9,9,9,9,9,9,9], [9, 9, 9, 9]));

