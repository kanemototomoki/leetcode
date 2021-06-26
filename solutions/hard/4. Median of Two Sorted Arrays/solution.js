// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var arr = [...nums1, ...nums2].sort((a, b) => a > b ? 1 : -1);

  var i = Math.floor((arr.length) / 2);

  return arr.length % 2 === 0
    ? (arr[i - 1] + arr[i]) / 2
    : arr[i];
};
