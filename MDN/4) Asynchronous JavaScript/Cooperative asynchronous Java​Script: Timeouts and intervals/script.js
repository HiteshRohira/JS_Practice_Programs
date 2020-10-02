let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let para = document.querySelector(".clock");

let secondCounter = 0;
para.textContent = "00 : 00 : 00";
let secondCounterLoop, time;
let minuteCounter = 0;
let hourCounter = 0;

// function displayTime() {
// 	secondCounter++;

// 	if (secondCounter > 59) {
// 		minuteCounter++;
// 		secondCounter = 0;
// 	}
// 	if (minuteCounter > 59) {
// 		hourCounter++;
// 		minuteCounter = 0;
// 	}

// 	time = `${
// 		(hourCounter > 9) ? hourCounter : (`0${hourCounter}`)
// 	} : ${
// 		(minuteCounter > 9) ? minuteCounter : (`0${minuteCounter}`)
// 	} : ${
// 		(secondCounter > 9) ? secondCounter : (`0${secondCounter}`)
// 	}`;

// 	para.textContent = time;
// }

// startBtn.addEventListener("click", () => {
// 	secondCounterLoop = setInterval(displayTime, 1000);
//  startBtn.disabled = true;
// });

// stopBtn.addEventListener("click", () => {
// 	clearInterval(secondCounterLoop);
//  startBtn.disabled = false;
// });

// resetBtn.addEventListener("click", () => {
// 	secondCounter = 0;
// 	minuteCounter = 0;
// 	hourCounter = 0;
// 	miliSecCounter = 0;
//  startBtn.disabled = false;
// 	clearInterval(secondCounterLoop);
// 	para.textContent = "00 : 00 : 00";
// });

// ------ USING Date.now() -------

let startTime;
let start = true;
let breakLoop;

// stopBtn.addEventListener("click", () => {
// 	breakLoop = true;
// });

function displayTime() {
	console.log("clicked " + start);
	startTime = Date.now();
	while (start) {
		time = Date.now() - startTime;
		para.textContent = time;
		console.log(time);
		stopBtn.addEventListener("click", () => {
			breakLoop = true;
		});
		if (breakLoop === true) {
			console.log("stop btn clicked");
			break;
		}
	}
}

startBtn.addEventListener("click", displayTime);

// stopBtn.addEventListener("click", () => {
// 	breakLoop = true;
// });

resetBtn.addEventListener("click", () => {
	start = false;
	para.textContent = "00 : 00 : 00";
});