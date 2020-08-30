function formatDate(date){
  let diff = Date.now() - date.getTime();
  if (diff < 1000) return "right now";
  else if (diff < 60 * 1000) return `${ (diff / 1000) } sec. ago`;
  else if (diff < 3600 * 1000) return `${ (diff / 60000) } min. ago`;
  else return `${ date.getDate() < 10 ? "0" + String(date.getDate()) : date.getDate() }.${ (date.getMonth() + 1) < 10 ? "0" + String(date.getMonth() + 1) : date.getMonth() + 1 }.${ (String(date.getFullYear())).slice(-2) } ${ date.getHours() }:${ date.getMinutes() }`;
}