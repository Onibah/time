import { compareAsc, format, formatDistance, getDayOfYear, useAdditionalDayOfYearTokens, formatDistanceToNowStrict, intervalToDuration } from 'date-fns'
import { cs } from 'date-fns/locale';



// const page = document.querySelector('.page');
// const text = document.querySelector('.timer__text');
// const btn = document.querySelector('.timer__button');

// function timer(arg1) {

// 	const arr = arg1.split('-');


// 	const time = format(new Date(arr[0], +(arr[1]) - 1, arr[2], arr[3], arr[4]), 'T')

// 	const ass = Math.round((Number(time) - Number(Date.now())));




// 	if (ass < 0) {

// 		text.textContent = 'Время уже прошло :('
// 	} else {
// 		const result = new Date(ass).toISOString();
// 		const year = Number(result.slice(0, 4)) - 1970;
// 		const month = Number(new Date(ass).getMonth());
// 		const day = Number(result.slice(8, 10) - 1);
// 		const hour = new Date(ass).toISOString().slice(11, 19);
// 		const timeString = `${year}y: ${month}m: ${day}d: ${hour}`;



// 		if (text.textContent === '0') {
// 			clearInterval(int)
// 		}
// 		text.textContent = timeString
// 	}


// }



// let int;


// function changeClass() {
// 	const calendar = document.querySelector('.timer__inp_calendar').value;
// 	const time = document.querySelector('.timer__inp_time').value.split(':').join('-');
// 	if (!(calendar) || !(time)) {
// 		return alert('Ты лох');
// 	}

// 	const allTime = `${calendar}-${time}`;


// 	page.classList.toggle('active-timer')
// 	if (page.classList.contains('active-timer')) {

// 		int = setInterval(() => {
// 			timer(allTime)
// 		}, 1000);


// 	} else {
// 		clearInterval(int)
// 	}
// }

// btn.addEventListener("click", changeClass);




//========================================================================================================================================================


let timerId;
const calendar = document.querySelector('.timer__inp_calendar');
const time = document.querySelector('.timer__inp_time');

const text = document.querySelector('.timer__text');
const btn = document.querySelector('.timer__button');
const btnTheme = document.querySelector('.timer__theme');

function timer(arr, stamp) {
	if (stamp < Date.now()) {
		console.log(1);
		text.textContent = 'You soul is mine'
	} else {
		let result = intervalToDuration({
			start: new Date(),
			end: new Date(arr[0], +(arr[1]) - 1, arr[2], arr[3], arr[4])
		})
		const timeString = `${result.years}y ${result.months}m ${result.days}d ${result.hours}h:${result.minutes}m:${result.seconds}s`;
		text.textContent = timeString
	}
}

btn.addEventListener("click", function () {
	if (!(calendar.value) || !(time.value.split(':').join('-'))) {
		return alert('Введи время, лох');
	}
	const array = (calendar.value + '-' + time.value.split(':').join('-')).split('-');
	const timeStamp = format(new Date(array[0], +(array[1]) - 1, array[2], array[3], array[4]), 'T')

	document.documentElement.classList.toggle('active-timer')
	if (document.documentElement.classList.contains('active-timer')) {
		timerId = setTimeout(function tick() {
			timer(array, timeStamp)
			timerId = setTimeout(tick, 1000);

			if (timeStamp < Date.now()) {
				document.documentElement.classList.remove('active-timer')
				return clearTimeout(timerId)
			}
		}, 1000);
	} else {
		clearTimeout(timerId)
	}
});

function changeTheme() {
	const theme = localStorage.getItem('dark');
	theme === 'on' ? localStorage.setItem('dark', 'off') : localStorage.setItem('dark', 'on')
	viewTheme()
}

btnTheme.addEventListener("click", changeTheme);

function viewTheme() {
	if (localStorage.getItem('dark') === 'on') {
		document.documentElement.classList.add('dark-on')
		calendar.disabled = true
		time.disabled = true
	} else {
		document.documentElement.classList.remove('dark-on')
		calendar.disabled = false
		time.disabled = false
	}
}
viewTheme()

//========================================================================================================================================================
// let timerId;
// const text = document.querySelector('.timer__text');
// const btn = document.querySelector('.timer__button');




// function timer(arr, stamp) {
// 	if (stamp < Date.now()) {
// 		console.log(1);
// 		text.textContent = 'Время вышло урод'
// 	} else {
// 		let result = intervalToDuration({
// 			start: new Date(),
// 			end: new Date(arr[0], +(arr[1]) - 1, arr[2], arr[3], arr[4])
// 		})
// 		const timeString = `${result.years}y ${result.months}m ${result.days}d ${result.hours}h:${result.minutes}m:${result.seconds}s`;
// 		text.textContent = timeString
// 	}
// }


// function changeTimer() {
// 	const local = localStorage.getItem('timer');

// 	const calendar = document.querySelector('.timer__inp_calendar').value;
// 	const time = document.querySelector('.timer__inp_time').value.split(':').join('-');

// 	if (!(calendar) || !(time)) {
// 		return alert('Ты лох');
// 	}

// 	const array = (calendar + '-' + time).split('-');
// 	const timeStamp = format(new Date(array[0], +(array[1]) - 1, array[2], array[3], array[4]), 'T')

// 	local === 'on' ? localStorage.setItem('timer', 'off') : localStorage.setItem('timer', 'on')



// 	document.documentElement.classList.toggle('active-timer')
// 	if (localStorage.getItem('timer') === 'on') {
// 		timerId = setTimeout(function tick() {
// 			timer(array, timeStamp)
// 			timerId = setTimeout(tick, 1000);

// 			if (timeStamp < Date.now()) {
// 				document.documentElement.classList.remove('active-timer')
// 				return clearTimeout(timerId)
// 			}
// 		}, 1000);
// 	} else {
// 		clearTimeout(timerId)
// 	}
// }

// btn.addEventListener("click", changeTimer);
