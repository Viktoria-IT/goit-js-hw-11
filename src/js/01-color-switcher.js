import '../css/common.css';

const refs = {
  startBtn: document.querySelector('button[data-start="start"]'),
  stopBtn: document.querySelector('button[data-stop="stop"]'),
  body: document.querySelector("body"),
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

// const timer = {
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }

//     this.isActive = true;
//     this.switchColors = setInterval(() => {
//       const min = 0;
//       const max = colors.length - 1;
//       let i = getRandomHexColor(min, max);
//       refs.body.style.backgroundColor = colors[i];
//     }, 1000);
//   },
//   stop() {
//     clearInterval(this.switchColors);
//     this.isActive = false;
//   },
// };

refs.startBtn.addEventListener("click", timer.start.bind(timer));
refs.stopBtn.addEventListener("click", timer.stop.bind(timer));