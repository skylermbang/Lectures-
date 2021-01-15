import "./styles.css";

const DaysEl = document.getElementById("days");
const HoursEl = document.getElementById("hours");
const MinsEl = document.getElementById("mins");
const secondsEl = document.getElementById("seconds");

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  // const xmasDay = new Date("2021-12-24:00:00:00+0900");

  const newYears = "24 Dec 2021";
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const diff = new Date(newYearsDate - currentDate) / 1000;

  const days = Math.floor(diff / 3600 / 24);
  const hours = Math.floor((diff / 3600) % 24);
  const mins = Math.floor(diff / 60) % 60;
  const seconds = Math.floor(diff % 60);

  console.log(days, hours, mins, seconds);
  DaysEl.innerText = days;
  HoursEl.innerHTML = hours;
  MinsEl.innerHTML = mins;
  secondsEl.innerHTML = seconds;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
  getTime();
}
init();
