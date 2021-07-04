// https://leetcode.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  var template = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M',
  }
  var format = {
    0: '',
    1: template[1],
    2: template[1] + template[1],
    3: template[1] + template[1] + template[1],
    4: template[1] + template[5],
    5: template[5],
    6: template[5] + template[1],
    7: template[5] + template[1] + template[1],
    8: template[5] + template[1] + template[1] + template[1],
    9: template[1] + template[10],
    10: template[10],
    20: template[10] + template[10],
    30: template[10] + template[10] + template[10],
    40: template[10] + template[50],
    50: template[50],
    60: template[50] + template[10],
    70: template[50] + template[10] + template[10],
    80: template[50] + template[10] + template[10] + template[10],
    90: template[10] + template[100],
    100: template[100],
    200: template[100] + template[100],
    300: template[100] + template[100] + template[100],
    400: template[100] + template[500],
    500: template[500],
    600: template[500] + template[100],
    700: template[500] + template[100] + template[100],
    800: template[500] + template[100] + template[100] + template[100],
    900: template[100] + template[1000],
    1000: template[1000],
    2000: template[1000] + template[1000],
    3000: template[1000] + template[1000] + template[1000],
  };

  var m = Math.trunc(num / 1000);
  var k = Math.trunc((num - m * 1000) / 100);
  var t = Math.trunc((num - m * 1000 - k * 100) / 10);
  var o = Math.trunc((num - m * 1000 - k * 100 - t * 10) / 1);

  var str = format[m * 1000] + format[k * 100] + format[t * 10] + format[o];
  return str;
};
