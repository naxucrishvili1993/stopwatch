const miliseconds = document.querySelector(".miliseconds");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");
const hours = document.querySelector(".hours");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
let msCounter = 0;
let secondCounter = 0;
let minuteCounter = 0;
let hourCounter = 0;
let interval;
startBtn.addEventListener("click", () => {
	startBtn.disabled = true;
	msCounter++;
	interval = setInterval(() => {
		msCounter++;
		if (msCounter < 10) miliseconds.innerText = "0" + msCounter;
		else miliseconds.innerText = msCounter;
		if (miliseconds.innerText === "59") {
			msCounter = -1;
			secondCounter++;
		}
		if (secondCounter < 10 && secondCounter > -1)
			seconds.innerText = "0" + secondCounter + ":";
		else seconds.innerText = secondCounter + ":";
		if (seconds.innerText === "59:") {
			secondCounter = 0;
			minuteCounter++;
			if (minuteCounter < 10) minutes.innerText = "0" + minuteCounter + ":";
			else minutes.innerText = minuteCounter + ":";
		}
		if (minutes.innerText === "59:") {
			minutes.innerText = "00:";
			minuteCounter = -1;
			hourCounter++;
			if (hourCounter < 10) hours.innerText = "0" + hourCounter + ":";
			else hours.innerText = hourCounter + ":";
		}
	}, 15);
});

stopBtn.addEventListener("click", () => {
	clearInterval(interval);
	startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
	startBtn.disabled = false;
	msCounter = 0;
	secondCounter = 0;
	minuteCounter = 0;
	hourCounter = 0;
	miliseconds.innerText = "0" + msCounter;
	seconds.innerText = "0" + secondCounter + ":";
	minutes.innerText = "0" + minuteCounter + ":";
	hours.innerText = "0" + hourCounter + ":";
	clearInterval(interval);
});
