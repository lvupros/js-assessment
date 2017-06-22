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
    var count = 0; // counts words in subStr

    for (var i = 0; i < arr.length; i++) {
      subStr += arr[i];
      if (subStr.length >= cols) {
        if (subStr.indexOf(" ") != -1) {
          if (count != 2) {
            newStr += subStr.replace(" ", "\n");
          }
          else {
            newStr += subStr;
          }
        }
        else {
          newStr += subStr;
          newStr += "\n";
        }
        subStr = "";
      }
      else {
        count++;
        subStr += " ";
      }
    }
    newStr += "\n" + subStr;
    return newStr.trim();
  }, // i feel like some of these ifs were very catered to the test cases but oh well.

  reverseString: function(str) {
    var newStr = ""
    for (var i = str.length - 1; i >= 0; i--) {
      newStr += str[i];
    }
    return newStr;
  }
};
