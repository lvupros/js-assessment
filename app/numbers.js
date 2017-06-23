exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {

  },

  base10: function(str) {

  },

  convertToBinary: function(num) {

  },

  multiply: function(a, b) {
    var ten = 1;
    while (a <= 1 || b <= 1) {
      if (a <= 1) {
        a *= 10;
      }
      else {
        b *= 10;
      }
      ten *= 10;
    }
    return (a * b) / ten;
  }
};
