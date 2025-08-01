let time = 25 * 60;
let timer = null;
let running = false;

function updateDisplay() {
  const minutes = Math.floor(time / 60).toString().padStart(2, '0');
  const seconds = (time % 60).toString().padStart(2, '0');
  document.getElementById('timer').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      alert("¡Pomodoro terminado!");
      running = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  clearInterval(timer);
  time = 25 * 60;
  running = false;
  updateDisplay();
}

function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("toggle-theme");
  btn.textContent = document.body.classList.contains("dark") ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

updateDisplay();