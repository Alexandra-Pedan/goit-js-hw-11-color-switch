import './styles.css';
import colors from "./colors";


const startBtn = document.querySelector("[data-action='start']");
const stopBtn = document.querySelector("[data-action='stop']");
let intervalId = null;
const PROMT_DELAY = 1000;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

function onStart() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
    }, PROMT_DELAY);
    startBtn.disabled = true;
}

function onStop() {
    clearInterval(intervalId);
    document.body.style.backgroundColor = '';
    startBtn.disabled = false;
}




