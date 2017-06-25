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
    var str1, str2;
    str1 = str;
    // obtain second parenthesis argument
    function second(str) {
      str2 = str;
      return str1 + ", " + str2;
    }
    // callback
    return second;
  },

  makeClosures: function(arr, fn) {
    var newArr = [];

    var calculate = function(num) {
      return function() {
        return fn(num);
      }
    }

    for (var i = 0; i < arr.length; i++) {
      newArr.push(calculate(arr[i]));
    }

    return newArr;
  },

  partial: function(fn, str1, str2) {
    return function(newPunct) {
      return fn(str1, str2, newPunct);
    };
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
    var given = Array.prototype.slice.call(arguments, 1, arguments.length);

    return function() {
      var remaining = given.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, remaining);
    }
  },

  curryIt: function(fn) {
    // similar to functionFunction, but let keep calling until args satisfied

    function helper(_fn, args) {
      return _fn.apply(null, args);
    }

    function final(args, expectedLen) {
      return function(current) {
        args.push(current);
        if (args.length === expectedLen) {
          return helper(fn, args);
        }
        // recursive call, keep doing until num args expected obtained
        return final(args, expectedLen);
      }
    }

    return final([], fn.length);
  }
};
