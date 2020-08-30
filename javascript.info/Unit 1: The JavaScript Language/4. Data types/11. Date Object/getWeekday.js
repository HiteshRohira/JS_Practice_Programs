function getWeekDay(date){
  let weekDays = [ "SU", "MO", "TU", "WE", "TH", "FR", "SA" ];
  return weekDays[date.getDay()];
}

let date = new Date(2012, 0, 3);
console.log(getWeekDay(date));