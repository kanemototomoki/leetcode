// https://leetcode.com/problems/string-to-integer-atoi/

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  var limit = 2147483648;

  // 空白削除
  s = s.replace(/\s|\.[0-9]+/g, '');

  // 1文字目が数値,-以外 -+が連続する場合
  if (s.match(/^[-|+]{2}/) || s.match(/^[a-z]/)) return 0;

  var abs = Number(s.replace(/[a-z]/g, '')) > 0 ? 1 : -1;
  s = Number(s.replace(/([^0-9])/g, ''));


  console.log('-------')
  console.log(s > limit)
  console.log('s', s)

  if (s > limit) {
    return abs === 1
      ? ~(limit * abs)
      : -limit;
  }

  return Number(s) * abs;
};
