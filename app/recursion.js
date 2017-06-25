exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesArr = [];
    var dirArr = [];

    function nav(dir) {
      var file;
      var files = dir.files;

      // folder in folder
      dirArr.push(dir.dir);

      // all files in folder to array
      for (var i = 0; i < files.length; i++) {
        file = files[i];
        if (typeof file === 'string') {
          if (!dirName || dirArr.indexOf(dirName) > -1) {
            filesArr.push(files[i]);
          }
        }
        else {
          nav(files[i]);
        }
      }
      dirArr.pop();
    }

    // feed in filepath and associated files
    nav(data);
    return filesArr;
  },

  permute: function(arr) {
    var newArr = [];
    var usedNums = [];

    function shuffle(list) {
      for (var i = 0; i < list.length; i++ ) {
        var nums = list.splice(i, 1)[0];
        usedNums.push(nums);
        if (list.length == 0) {
          newArr.push(usedNums.slice());
        }
        shuffle(list);
        list.splice(i, 0, nums);
        usedNums.pop();
      }
    }

    shuffle(arr);
    return newArr;
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
