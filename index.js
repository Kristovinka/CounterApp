const plusButton = document.querySelector('.plusPointBtn');
const result = document.querySelector('.result');
const minusButton = document.querySelector('.minusPointBtn');

let counterValue = 0;

const increaseCounter = () => {
    counterValue ++;
    result.textContent = counterValue;
};

const decreaseCounter = () => {
    counterValue --;
    result.textContent = counterValue;
};

plusButton.addEventListener('click', increaseCounter);
minusButton.addEventListener('click', decreaseCounter);


