/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const limit = 2147483648;
  const abs = x < 0 ? -1 : 1;
  const ans = Number(String(Math.abs(str)).split('').reverse().join(''));
  return ans > limit ? 0 : ans * abs;
};

console.log(reverse(1534236469));
