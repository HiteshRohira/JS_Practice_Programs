const spinner = document.querySelector('div');
let rotateCount = 0;
let startTime = null;
let rAF;
let spinning = true;

document.body.addEventListener("click", () => {
	if (spinning === true) {
		cancelAnimationFrame(rAF);
		spinning = false;
	}
	else {
		draw();
		spinning = true;
	}
});

function draw(timestamp) {
	if(!startTime) {
		startTime = timestamp;
	}

	rotateCount = (timestamp - startTime) / 3;

	if(rotateCount > 359) {
		rotateCount %= 360;
	}

	spinner.style.transform = `rotate(${rotateCount}deg)`;

	rAF = requestAnimationFrame(draw);
}

draw();