import '../sass/main.scss';
//import Swal from 'sweetalert2/dist/sweetalert2.js'
//import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

const date = new Date();
console.log(date);
const btnStart = document.querySelector('[data-start]');
console.log(btnStart);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const dataStart = () => { };

btnStart.addEventListener('click', dataStart);