let hr = min = sec = "0" + 0,
  startTimer;


const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

// to add event listeners on the buttons 
startBtn.addEventListener("click" , start);
stopBtn.addEventListener("click" , stop);
resetBtn.addEventListener("click" , reset);

// to start the timer
function start() {
	startBtn.classList.add("active");
	stopBtn.classList.remove("stopActive");

	startTimer = setInterval(()=>{
		sec++;
		sec = sec<10 ? "0" + sec : sec;

		if(sec == 60){
			min++;
			min = min<10 ? "0" + min : min;
			sec = "0" + 0;
		}

		if(min == 60){
			hr++;
			hr = hr<10 ? "0" + hr : hr;
			min = "0" + 0;
		}


		putValue();

	 }, 1000); //1000ms = 1sec

}

// to stop the timer
function stop() {
	startBtn.classList.remove("active");
	stopBtn.classList.add("stopActive");
	clearInterval(startTimer);

}

// to reset the timer
function reset() {
	startBtn.classList.remove("active");
	stopBtn.classList.remove("stopActive");
	clearInterval(startTimer);
	let hr = min = sec = "0" + 0;
	putValue();
}

// to put value in the timer
function putValue(){
	document.querySelector(".seconds").innerText = sec;
	document.querySelector(".minute").innerText = min;
	document.querySelector(".hour").innerText = hr;

}