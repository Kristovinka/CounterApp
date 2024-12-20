const plusButton = document.querySelector('.plusPointBtn');
const result = document.querySelector('result');
const minusButton = document.querySelector('minusPointBtn');

let couterValue = 0;

const increaseCounter = () => {
    couterValue --;
    document.querySelector('result').textContent = couterValue;
}

const decreaseCounter = () => {

}

plusButton.addEventListener('click', increaseCounter);
minusButton.addEventListener('click', decreaseCounter);


