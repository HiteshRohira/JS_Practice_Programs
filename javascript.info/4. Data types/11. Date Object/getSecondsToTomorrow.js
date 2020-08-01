function getSecondsToTomorrow(){
  let timeNow = new Date();
  let nextDate = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate() + 1);
  return Math.round((nextDate - timeNow) / 1000);
}

console.log(getSecondsToTomorrow());