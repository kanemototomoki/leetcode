// https://leetcode.com/problems/combination-sum/
// https://en.wikipedia.org/wiki/Knapsack_problem#Solving

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  // 偶数か否か
  var isEven = target % 2 === 0
    ? '2x' + target / 2
    : '2x' + Math.trunc(target / 2) + ' +1';

  // 6 2x3
  // 7 2x3+1

  var even = [];
  var odd = [];
  var evenTmp = [];
  var oddTmp = [];

  for (var i in candidates) {
    if (candidates[i] % 2 === 0) {
      even[even.length] = candidates[i];
      evenTmp[evenTmp.length] = '2x' + candidates[i] / 2;
      continue;
    }

    odd[odd.length] = candidates[i];
    oddTmp[oddTmp.length] = '2x' + Math.trunc(candidates[i] / 2) + ' +1';

  }

  console.log({ isEven })
  console.log({ even })
  // console.log({evenTmp})
  console.log({ odd })
  // console.log({oddTmp})

  // odd総当たり作戦
  for (var i in odd) {
    var num = odd[i];
    var rem = target - num;
  }
};
