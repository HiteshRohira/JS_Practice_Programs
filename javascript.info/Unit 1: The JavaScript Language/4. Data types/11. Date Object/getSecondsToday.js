function getSecondsToday() {
  let timeNow = new Date();
  let currentDate = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());
  return Math.round((timeNow - currentDate) / 1000);
}

console.log(getSecondsToday());