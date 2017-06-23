exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    // memoization
    var nums = [1, 1];
    while (nums.length < n) {
      var num = nums[nums.length - 2] + nums [nums.length - 1];
      nums.push(num);
    }
    return nums[nums.length - 1];
  },

  validParentheses: function(n) {
    var arr = [];

    function pairParens(left, right, str) {
      // all pairs made
      if (left == 0 && right == 0) {
        arr.push(str);
      }
      // add a left paren
      if (left > 0) {
        pairParens(left - 1, right + 1, str + "(");
      }
      // add a right paren
      if (right > 0) {
        pairParens(left, right - 1, str + ")");
      }
    }

    pairParens(n, 0, "");
    return arr;
  }
};
