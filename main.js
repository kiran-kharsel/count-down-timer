
// dom elem
const daysElem = document.querySelector('.timer .days')
const hoursElem = document.querySelector('.timer .hours')
const minsElem = document.querySelector('.timer .mins')
const secElem = document.querySelector('.timer .seconds')

// count interval
let countdownInterval;

function srartCountDown(){
  clearInterval(countdownInterval)

  const targetDate = new Date('2026-01-01').getTime();
  
  countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const remainingTime = targetDate - now;

    if(remainingTime <= 0){
      clearInterval(countdownInterval);
      return;
    };

    const days = Math.floor(remainingTime / (1000 * 60 * 60* 24))
    const hours = Math.floor((remainingTime % (1000 * 60 * 60* 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


    daysElem.innerHTML = days;
    hoursElem.innerHTML = hours;
    minsElem.innerHTML = minutes;
    secElem.innerHTML = seconds;


  }, 1000);
};

srartCountDown()