export default class Timer {
  hour = 0;
  minute = 25;
  second = 0;

  totalSecond = undefined;
  dateStart = undefined;
  previousDateSecond = undefined;

  timerInterval = undefined;

  onStopFunction = undefined;

  isRunning() {
    if (this.timerInterval === undefined) {
      return false;
    } else {
      return true;
    }
  }
  onStop(callback) {
    this.onStopFunction = callback;
  }
  startOrStopTimer() {
    if (this.timerInterval === undefined) {
      this.startTimer();
    } else {
      this.stopTimer();
    }
  }
  startTimer() {
    if (this.timerInterval === undefined) {
      this.timerInterval = setInterval(this.timerElapsed.bind(this), 100);
      this.dateStart = new Date();
      this.totalSecond = this.hour * 3600 + this.minute * 60 + this.second;
    }
  }
  stopTimer() {
    if (this.timerInterval === undefined) {
      return;
    }
    clearInterval(this.timerInterval);
    this.timerInterval = undefined;
    this.dateStart = undefined;
    if (this.onStopFunction !== undefined) {
      this.onStopFunction();
    }
  }
  timerElapsed() {
    this.v2();
  }
  changeTime() {
    if (this.second === 0) {
      if (this.minute === 0) {
        if (this.hour === 0) {
          this.stopTimer();
          return;
        }
        this.hour = this.hour - 1;
        this.minute = 59;
      } else {
        this.minute = this.minute - 1;
      }
      this.second = 59;
    } else {
      this.second = this.second - 1;
    }
  }
  getText() {
    var text = "";
    if (this.hour !== 0) {
      if (text !== "") {
        text = text + ":";
      }
      text = text + this.hour;
    }
    if (this.minute !== undefined) {
      if (text !== "") {
        text = text + ":";
      }
      if (this.minute < 10) {
        text = text + "0" + this.minute;
      } else {
        text = text + this.minute;
      }
    }
    if (this.second !== undefined) {
      if (text !== "") {
        text = text + ":";
      }
      if (this.second < 10) {
        text = text + "0" + this.second;
      } else {
        text = text + this.second;
      }
    }

    return text;
  }
  formatTime(seconds) {
    this.hour = Math.floor(seconds / 3600);
    this.minute = Math.floor((seconds - this.hour * 3600) / 60);
    this.second = seconds - this.hour * 3600 - this.minute * 60;
  }
  v2() {
    var now = new Date();
    var nowHour = now.getHours();
    var nowMinute = now.getMinutes();
    var nowSecond = now.getSeconds();

    var nowTotal = nowHour * 3600 + nowMinute * 60 + nowSecond;

    var previousHour = this.dateStart.getHours();
    var previousMinute = this.dateStart.getMinutes();
    var previousSecond = this.dateStart.getSeconds();

    var previousTotal = previousHour * 3600 + previousMinute * 60 + previousSecond;

    var diffreneceTotal = nowTotal - previousTotal;

    this.formatTime(this.totalSecond - diffreneceTotal);
  }

  // v1() {
  //   var now = new Date().getSeconds();
  //   if (now === this.previousDateSecond) {
  //     return;
  //   } else {
  //     this.previousDateSecond = now;
  //     this.changeTime();
  //     console.log(
  //       "5ciPazl Library --> " +
  //         this.hour +
  //         ":" +
  //         this.minute +
  //         ":" +
  //         this.second
  //     );
  //   }
  // }
}
