/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const val = [...nums1, ...nums2].sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });
  const centerLen = Math.abs(Math.floor(val.length / 2));

  if (val.length % 2 !== 0) {
    return val[centerLen];
  }

  return (val[centerLen-1] + val[centerLen]) / 2;
};

console.log('answer: ', findMedianSortedArrays([3], [-1, -2]));
