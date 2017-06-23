exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
      // check to make sure not already repeated
      if (!(newStr.endsWith(str[i]))) {
        // check to make sure char is duplicated
        if (str[i] == str[i + 1]) {
          var repeat = str[i];
          newStr += repeat.repeat(amount);
        }
        // add unduplicated char
        else {
          newStr += str[i];
        }
      }
    }
    return newStr;
  },

  wordWrap: function(str, cols) {
    var newStr = "";
    var subStr = "";
    var arr = str.split(" ");
    
    for (var i = 0; i < arr.length; i++) {
      subStr += arr[i];
      if (subStr.length >= cols) {
        if (subStr.length == cols) {
          newStr += subStr + "\n";
        }
        else if (subStr.indexOf(" ") != -1) {
          newStr += subStr.replace(" ", "\n") + "\n";
        }
        else {
          newStr += subStr + "\n";
        }
        subStr = "";
      }
      else {
        subStr += " ";
      }
    }
    newStr += subStr
    return newStr.trim();
  }, 

  reverseString: function(str) {
    var newStr = ""
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
};
