exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    /**
    * This test describes a function, count, that takes two arguments: a starting number,
    * and an ending number. The function should console.log each number from the start
    * number to the end number, one number per 1/10th of a second. The function should
    * return an object with a cancel method, which should cancel the counting.
    */

    // 100 milliseconds = 1/10th second
    var timeStart = start;
    var timeEnd = end;
    var timerBool = false; // to ensure cancellation of setInterval

    var timer = {
      cancel  : function() {
        timerBool = true;
        clearInterval(this);
      },
      start : function() {
        // initial log, then timed logs
        console.log(timeStart);
        setInterval(function() {
          if ((1 + timeStart > timeEnd) || timerBool) {
            timer.cancel();
          }
          else {
            console.log(1 + timeStart);
            timeStart++;
          }
        }, 100);
      }
    };

    timer.start();
    return timer;
  }
};
