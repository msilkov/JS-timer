const timer = document.querySelector('.timer');
const hours = timer.querySelector('.timer__hours');
const minutes = timer.querySelector('.timer__minutes');
const seconds = timer.querySelector('.timer__seconds');

const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');


let remainingTime = 0;
let timerInterval;

function startTimer() {
  remainingTime = (hoursInput.value * 3600) + (minutesInput.value * 60) + Number(secondsInput.value);

  if (remainingTime !== 0) {
    hoursInput.value = '0';
    minutesInput.value = '0';
    secondsInput.value = '0';

    timerInterval = setInterval(() => {
      remainingTime--;

      const remainingHours = Math.floor(remainingTime / 3600);
      const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
      const remainingSeconds = remainingTime % 60;

      hours.textContent = remainingHours.toString().padStart(2, '0');
      minutes.textContent = remainingMinutes.toString().padStart(2, '0');
      seconds.textContent = remainingSeconds.toString().padStart(2, '0');

      if (remainingTime === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
      }
    }, 1000);
  } else {
    alert('Введите значение таймера');
  }
}

function resetTimer() {
  clearInterval(timerInterval);
  remainingTime = 0;
  hours.textContent = '00';
  minutes.textContent = '00';
  seconds.textContent = '00';
  hoursInput.value = '0';
  minutesInput.value = '0';
  secondsInput.value = '0';
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
