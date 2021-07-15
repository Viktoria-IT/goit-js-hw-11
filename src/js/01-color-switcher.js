import '../css/common.css';

const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');


let isActive = false;
startRender.addEventListener('click', function () {
   if (!isActive) {
      isActive = setInterval(() => {
         document.body.style.backgroundColor = getRandomHexColor();
      }, 1000);
   }
   else {
      return;
   }

});



stopRender.addEventListener('click', function () {
  if (isActive) {
    clearInterval(isActive);
  }
  isActive = false;
});



