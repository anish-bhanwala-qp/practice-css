const body = document.body;
const themeBtn = document.querySelector(".js-theme-btn");
const time = document.querySelector(".js-time");
const dateFormatted = document.querySelector(".js-date-formatted");
const secondHand = document.querySelector(".js-second-hand");
const minuteHand = document.querySelector(".js-minute-hand");
const hourHand = document.querySelector(".js-hour-hand");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const startClock = () => {
  const date = new Date();
  updateTime(date);
  updateDate(date);
  updateHands(date);
};

const updateHands = (date) => {
  const mins = date.getMinutes();
  // Clock is a circle with 360 deg
  // Every second the second-hand moves by 360/60 = 6deg
  const minAngle = 6 * mins;
  minuteHand.style.transform = `rotate(${minAngle}deg)`;

  const seconds = date.getSeconds();
  const secondsAngle = 6 * seconds;
  secondHand.style.transform = `rotate(${secondsAngle}deg)`;

  const hours = date.getHours() % 12;
  const hoursAngle = 30 * hours;
  hourHand.style.transform = `rotate(${hoursAngle}deg)`;
};

const updateTime = (date) => {
  const hours24Format = date.getHours();
  const minutes = date.getMinutes();
  const hour = hours24Format % 12;
  const ampm = hours24Format > 12 ? "PM" : "AM";
  time.innerText = `${hour}:${minutes} ${ampm}`;
};

const updateDate = (date) => {
  const day = dayNames[date.getDay()];
  const month = monthNames[date.getMonth()].substring(0, 3);
  dateFormatted.innerHTML = `${day}, ${month} <span class="date">${date.getDate()}</span`;
};

themeBtn.addEventListener("click", () => {
  body.classList.toggle("theme-dark");
  const isDarkTheme = body.classList.contains("theme-dark");
  themeBtn.innerText = isDarkTheme ? "Light mode" : "Dark mode";
});

startClock();
setInterval(startClock, 1000);
