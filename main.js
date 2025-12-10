// dom elem
const daysElem = document.querySelector(".timer .days");
const hoursElem = document.querySelector(".timer .hours");
const minsElem = document.querySelector(".timer .mins");
const secElem = document.querySelector(".timer .seconds");
const startBtn = document.querySelector(".input button");

// count interval
let countdownInterval;

startBtn.addEventListener("click", function () {
  startCountdown();
});

function startCountdown() {
  clearInterval(countdownInterval);

  const dateInput = document.getElementById("dateInput").value;
  if (!dateInput) {
    alert("Please select a date and time!");
    return;
  }

  const targetDate = new Date(dateInput).getTime();

  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      showTime('00', '00', '00', '00')
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    showTime(days, hours, minutes, seconds);


  }, 1000);
}

function showTime(days, hours, minutes, seconds) {
  daysElem.innerHTML = days;
  hoursElem.innerHTML = hours;
  minsElem.innerHTML = minutes;
  secElem.innerHTML = seconds;
}
