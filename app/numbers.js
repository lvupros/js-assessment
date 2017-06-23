exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var bin = "";
    for (var e = 7; e >= 0; e--) {
      if (num / Math.pow(2, e) >= 1) {
        bin += "1";
        num -= Math.pow(2, e);
      }
      else {
        bin += "0";
      }
    }
    return Number(bin[8 - bit]);
  },

  base10: function(str) {
    var num = 0;
    var exp = 0;
    for (var i = str.length - 1; i >= 0; i--) {
      num += (str[i] * (Math.pow(2, exp)));
      exp++;
    }
    return num;
  },

  convertToBinary: function(num) {
    var bin = "";
    for (var e = 7; e >= 0; e--) {
      if (num / Math.pow(2, e) >= 1) {
        bin += "1";
        num -= Math.pow(2, e);
      }
      else {
        bin += "0";
      }
    }
    return bin;
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
