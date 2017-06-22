exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    var total = 0;
    var i;
    for (i in arr) {
      total += arr[i];
    }
    return total;
  },

  remove: function(arr, item) {
    var newArr = [];
    var remove = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != item) {
        newArr.push(arr[i]);
      }
      else {
        remove.push(arr[i]);
      }
    }
    return newArr;
  },

  removeWithoutCopy: function(arr, item) {
    while (arr.indexOf(item) != -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr; // this can also be used as a shorter version of remove
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(-1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    while (arr.indexOf(item) != -1) {
      arr.splice(arr.indexOf(item), 1);
      count++;
    }
    return count;
  },

  duplicates: function(arr) {
    var duplicate = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j] && duplicate.indexOf(arr[i]) == -1) {
          duplicate.push(arr[i]);
        }
      }
    }
    return duplicate;
  },

  square: function(arr) {
    var square = [];
    for (var i = 0; i < arr.length; i++) {
      square.push(arr[i] ** 2);
    }
    return square;
  },

  findAllOccurrences: function(arr, target) {
    var where = [];
    while (arr.indexOf(target) != -1) {
      where.push(arr.indexOf(target));
      delete arr[arr.indexOf(target)];
    }
    return where;
  }
};
