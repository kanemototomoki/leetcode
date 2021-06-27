// https://leetcode.com/problems/add-two-numbers/

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
var addTwoNumbers = function (l1, l2) {
  var result = new ListNode();
  var tmp = result;

  while (l1 || l2) {
    var _l1 = l1.val || 0;
    var _l2 = l2.val || 0;
    var sum = _l1 + _l2;

    if (sum >= 10) {
      sum = (sum % 10);
      l1.next ? l1.next.val += 1 : l1.next = new ListNode(1);
    }

    tmp.val = sum;
    if (l1.next || l2.next) {
      tmp.next = new ListNode();
      tmp = tmp.next;
    }

    l1 = l1.next || 0;
    l2 = l2.next || 0;
  }

  return result;
};
