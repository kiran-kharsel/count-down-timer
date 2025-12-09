let eventTimeStamp = new Date(2026, 0, 1, 0, 0, 0).getTime();

// dom elem
const daysElem = document.querySelector('.timer .days')
const hoursElem = document.querySelector('.timer .hours')
const minsElem = document.querySelector('.timer .mins')
const secElem = document.querySelector('.timer .seconds')

function convertime() {
  let currentTimeStamp = new Date().getTime();
  let remainingTimeStamp = eventTimeStamp - currentTimeStamp;
  //console.log(remainingTimeStamp );

//   if(remainingTimeStamp > 0){
//     const seconds = Math.floor(remainingTimeStamp / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);

//     const remainingSeconds = seconds % 60;
//     const remainingMinutes = minutes % 60;
//     const remainingHours = hours % 24;

//     setTimer(days, remainingHours, remainingMinutes, remainingSeconds)
//   } else{
//     setTimer('00', '00', '00', '00')
//   }

    const seconds = Math.floor(remainingTimeStamp / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const remainingSeconds = seconds % 60;
    const remainingMinutes = minutes % 60;
    const remainingHours = hours % 24;

  return {
    days: days,
    hours: remainingHours,
    minutes: remainingMinutes,
    seconds: remainingSeconds,
    remainingTimeStamp,
  };
}

function updateTimer() {
  let interval = setInterval(() => {
    // console.log('ok');
    const {days, hrs, mins, seconds, remainingTimeStamp} = convertime()
    // console.log(seconds)
    if(remainingTimeStamp > 0){
        // console.log('working')
        setTimer(days, hrs, mins, seconds);
    } else{
        setTimer('00', '00', '00', '00');
        clearInterval(interval)
    }
  }, 1000);

}

// updateTimer();



function setTimer(days, hrs, mins, sec){
    daysElem.innerHTML = days === undefined ? '00' : days;
    hoursElem.innerHTML = hrs === undefined ? '00' : hrs;
    minsElem.innerHTML = mins === undefined ? '00' : mins;
    secElem.innerHTML = sec === undefined ? '00' : sec;
}

// setTimer()