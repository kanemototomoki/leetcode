// https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.replace(/\s*$/, '').match(/[a-zA-Z]*$/)[0].length;
};
