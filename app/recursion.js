exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

  },

  permute: function(arr) {

  },

  fibonacci: function(n) {
    var nums = [1, 1];
    while (nums.length < n) {
      var num = nums[nums.length - 2] + nums [nums.length - 1];
      nums.push(num);
    }
    return nums[nums.length - 1];
  },

  validParentheses: function(n) {

  }
};
