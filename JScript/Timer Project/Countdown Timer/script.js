// const date = new Date();
// console.log(date);

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const upDateCountDown = (deadline) => {
  const currentTime = new Date();
  const timeDifference = deadline - currentTime;

  // calcutate days, hours, mins, secs from timeDifference
  let calSecs = Math.floor(timeDifference / 1000) % 60;
  let calcMins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calcHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calcDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  days.textContent = formatTime(calcDays);
  mins.textContent = formatTime(calcMins);
  hours.textContent = formatTime(calcHours);
  secs.textContent = formatTime(calSecs);
  // console.log(days);
};

const countDown = (targetDate) => {
  setInterval(() => upDateCountDown(targetDate), 1000);
};

const targetDate = new Date("December 31 2024 12:00");

countDown(targetDate);
