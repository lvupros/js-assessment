exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var newArr = [];

    for (var data in obj) {
      if (obj.hasOwnProperty(data)){
        newArr.push(data + ": " + obj[data]);
      }
    }

    return newArr;
  }
};
