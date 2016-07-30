(function(){
	"use strict";

	var startTime;
	var timerId;
	var elapsedTime = 0.00;
	var isRunning = false;

	var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var resetButton = document.getElementById("reset");
	var timerText = document.getElementById("timerText");

	function setButtonState(start, stop, reset){
		startButton.className = start ? "btn active" : "btn inactive";
		stopButton.className = stop ? "btn active" : "btn inactive";
		resetButton.className = reset ? "btn active" : "btn inactive";
	}
	setButtonState(true, false, false);

	startButton.addEventListener("click", function(){
		if(isRunning) return;
		isRunning = true;
		setButtonState(false, true, true);
		startTime = Date.now();
		updateTimerText();
	});

	stopButton.addEventListener("click", function(){
		if(!isRunning) return;
		isRunning = false;
		setButtonState(true, false, true);
		clearTimeout(timerId);
		elapsedTime += Date.now() - startTime;
	});

	resetButton.addEventListener("click", function(){
		if(isRunning) return;
		setButtonState(true, false, false);
		elapsedTime = 0.00;
		timerText.innerHTML = "0.00";

	});

	function updateTimerText(){
		timerId = setTimeout(function(){
			var t = Date.now() - startTime + elapsedTime;
			timerText.innerHTML = (t/1000).toFixed(2);
			updateTimerText();
		}, 10);
	}
})();


