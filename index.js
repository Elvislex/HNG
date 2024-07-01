const currentTime = document.querySelector('.current-time');
const currentDay = document.querySelector('.current-day');

//TIME
function addZero(number) {
  return number < 10 ? '0' + number : number;
}
function timeAndDay() {
  const dateNow = new Date();

  const hours = dateNow.getUTCHours();
  const mins = dateNow.getUTCMinutes();
  const stamp = hours <= 12 ? 'AM' : 'PM';

  const newDate = `${addZero(hours)}:${addZero(mins)} ${stamp}`;
  return newDate;
}

currentTime.textContent = timeAndDay();

//DATE
const date = new Date();
const day = date.getUTCDay();
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const dayOfTheWeek = days[day];
currentDay.textContent = dayOfTheWeek;
