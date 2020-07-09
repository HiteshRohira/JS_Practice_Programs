function dominantDirection(text) {
  let script;
  let directions = [];
  for (let char of text) {
      script = charachterScript(char.codePointAt(0));
    if (script != null) directions.push(script.direction);
}
let count = countBy(directions);
if (count.rtl > count.ltr && count.rtl > count.ttb) return "rtl";
else if (count.ltr > count.rtl && count.ltr > count.ttb) return "ltr";
else return "ttb";
}

function charachterScript (code) {
for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
  }
return null;
}

function countBy (items) {
let counts = {rtl: 0, ltr: 0, ttb: 0};
for (let item of items) {
  if (item === "rtl") counts.rtl++;
  else if (item === "ltr") counts.ltr++;
  else counts.ttb++;
}
return counts;
}


// runs only in https://eloquentjavascript.net/code/#5.4