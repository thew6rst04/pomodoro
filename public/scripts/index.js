let timeLeft = 25 * 60;
let pomodoroTimer = null;

const timer = document.getElementById("pomodoro-timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

function updatePomodoroDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timer.textContent = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
}

function startPomodoro() {
  if (!pomodoroTimer) {
    pomodoroTimer = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updatePomodoroDisplay();
      } else {
        clearInterval(pomodoroTimer);
        pomodoroTimer = null;
        alert("Finish!");
      }
    }, 1000);

    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }
}

function pausePomodoro() {
  clearInterval(pomodoroTimer);
  pomodoroTimer = null;
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

function reset() {
  pausePomodoro();
  updatePomodoroDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

updatePomodoroDisplay();
pauseBtn.disabled = true;
