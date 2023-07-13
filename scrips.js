const TOTAL_SQUARES = 256;

const container = document.querySelector('#container');

let square;
for (let i = 0; i < TOTAL_SQUARES; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}