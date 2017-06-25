exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    var def = $.Deferred();
    // time
    setTimeout(function () {
      def.resolve(value);
    }, 10);
    return def.promise();
  },

  manipulateRemoteData: function(url) {
    var def = $.Deferred();
    // go to location
    $.ajax(url).then(function(ret) {
      //obtain values
      var people = $.map(ret.people, function(person) {
        return person.name;
      });
      def.resolve(people.sort());
    });
    return def.promise();
  }
};
