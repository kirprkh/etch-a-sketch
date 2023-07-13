const TOTAL_SQUARES = 256;
const HOVERING_SQUARE_COLOR = 'orange';

const container = document.querySelector('#container');

let square;
for (let i = 0; i < TOTAL_SQUARES; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = HOVERING_SQUARE_COLOR;
}));
