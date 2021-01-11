/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const n of nums) {
    const i = nums.indexOf(n)
    for (const m of nums.slice(i + 1)) {
      if (n + m === target) {
        return [i, nums.indexOf(m, i + 1)];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 26));
