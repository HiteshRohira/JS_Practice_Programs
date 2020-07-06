/*
Speed Limit = 70
for every 5 unit above 70, we give 1 point
For more than 12 points, license gets suspended
*/

checkSpeed(75);

function checkSpeed(speed) {
    const point = Math.floor((speed - 70) / 5);//70 is the speed limit
    if (point <= 0) console.log("Ok");
    else if (point > 0 && point < 12) console.log(point + " points.");
    else console.log("License suspended");
}