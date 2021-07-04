// https://leetcode.com/problems/zigzag-conversion/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {

  if (numRows === 1) return s;

  var result = [];
  var count = numRows - 1;
  var isAsc = false;
  s = s.replace(/,/g, 'T')

  for (var i = 0; i < s.length; i++) {
    if (i < numRows) {
      result[i] = [s[i]];
      continue;
    }

    if (count === 0 || count === numRows - 1) {
      isAsc = !isAsc;
    }

    isAsc ? count-- : count++;
    result[count][result[count].length] = s[i];
  }

  return result.join('').replace(/,/g, '').replace(/T/g, ',');
};
/*
s = "PAYPALISHIRING", numRows = 4

0[P, ○, ○, I, ○, ○, N]
1[A, ○, L, S, ○, I, G]
2[Y, A, ○, H, R, ○, ○]
3[P, ○, ○, I, ○, ○, ○]

s = "PAYPALISHIRING", numRows = 3
[P, ○, A, ○, H, ○, N]
[A, P, L, S, I, I, G]
[Y, ○, I, ○, R, ○, ○]
*/
