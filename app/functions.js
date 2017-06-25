exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak: function(fn, obj) {
    var newObj = {
      greeting  : obj.greeting,
      name  : obj.name,
      func  : fn
    };

    return newObj.func();
  },

  functionFunction: function(str) {

  },

  makeClosures: function(arr, fn) {

  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
  },

  callIt: function(fn, a, b, c) {
    if (c == undefined) {
      return fn(a, b);
    }
    return fn(a, b, c);
  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {
    return fn();
  }
};
