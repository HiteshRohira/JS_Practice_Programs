function getLocalDay(date){
  if (date.getDay() > 0) {
    return date.getDay();
  }
  return 7;
}