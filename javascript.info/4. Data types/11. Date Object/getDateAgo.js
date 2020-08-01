function getDateAgo(date, days){
  let tempDate = new Date(date.getTime());
  tempDate.setDate(date.getDate() - days);
  return tempDate.getDate();
}