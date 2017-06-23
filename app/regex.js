exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    return /[0-9]/.test(str);
  },

  containsRepeatingLetter: function(str) {
    return /([a-zA-Z])\1+/i.test(str);
  },

  endsWithVowel: function(str) {
    return /[aeiou]$/i.test(str);
  },

  captureThreeNumbers: function(str) {
    var match = /\d\d\d/.exec(str);
    if (match != null) {
      return match[0];
    }
    return false;
  },

  matchesPattern: function(str) {
    return /^\d\d\d\-\d\d\d\-\d\d\d\d$/.test(str);
  },

  isUSD: function(str) {
    // always start with $
    // sometimes end with .xx

    return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
  }
};
