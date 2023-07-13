const DEFAULT_NUMBER_OF_SQUARES_PER_SIDE = 16;
const HOVERING_SQUARE_COLOR = 'orange';

const container = document.querySelector('#container');

let square;
const totalSquares = DEFAULT_NUMBER_OF_SQUARES_PER_SIDE * DEFAULT_NUMBER_OF_SQUARES_PER_SIDE;
for (let i = 0; i < totalSquares; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => square.addEventListener('mouseover', () => {
    square.style.backgroundColor = HOVERING_SQUARE_COLOR;
}));
