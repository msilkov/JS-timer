// Получаем элементы страницы, необходимые для работы таймера
const timer = document.querySelector('.timer');
const hours = timer.querySelector('.timer__hours');
const minutes = timer.querySelector('.timer__minutes');
const seconds = timer.querySelector('.timer__seconds');

// Получаем элементы управления для таймера и кнопки
const hoursInput = document.getElementById('hours');
const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');

// Объявляем переменные для работы таймера
let remainingTime = 0;
let timerInterval;

// Функция запуска таймера
function startTimer() {
	// Вычисляем общее время в секундах
	remainingTime =
		hoursInput.value * 3600 +
		minutesInput.value * 60 +
		Number(secondsInput.value);

	// Если время не равно 0, то запускаем таймер
	if (remainingTime !== 0) {
		// Сбрасываем значения инпутов
		hoursInput.value = '0';
		minutesInput.value = '0';
		secondsInput.value = '0';

		// Запускаем интервал обновления таймера
		timerInterval = setInterval(() => {
			// Уменьшаем оставшееся время
			remainingTime--;

			// Вычисляем оставшееся время в часах, минутах и секундах
			const remainingHours = Math.floor(remainingTime / 3600);
			const remainingMinutes = Math.floor((remainingTime % 3600) / 60);
			const remainingSeconds = remainingTime % 60;

			// Обновляем значения часов, минут и секунд на странице
			hours.textContent = remainingHours.toString().padStart(2, '0');
			minutes.textContent = remainingMinutes.toString().padStart(2, '0');
			seconds.textContent = remainingSeconds.toString().padStart(2, '0');

			// Если время закончилось, то останавливаем таймер и показываем сообщение
			if (remainingTime === 0) {
				clearInterval(timerInterval);
				alert("Time's up!");
			}
		}, 1000);
	} else {
		// Если время равно 0, то показываем сообщение с просьбой ввести время
		alert('Введите значение таймера');
	}
}

// Функция сброса таймера
function resetTimer() {
	// Останавливаем интервал таймера, обнуляем оставшееся время и значения на странице
	clearInterval(timerInterval);
	remainingTime = 0;
	hours.textContent = '00';
	minutes.textContent = '00';
	seconds.textContent = '00';
	hoursInput.value = '0';
	minutesInput.value = '0';
	secondsInput.value = '0';
}

// Назначаем обработчики событий на кнопки управления таймером
startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
