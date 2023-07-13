const DEFAULT_NUMBER_OF_SQUARES_PER_SIDE = 16;
const HOVERING_SQUARE_COLOR = 'orange';
const SKETCH_FIELD_WIDTH = 500;

const container = document.querySelector('#container');

function createGrid(squaresPerSide) {
    const totalSquares = squaresPerSide * squaresPerSide;
    const squareSide = calculateSquareSide(squaresPerSide);

    let square;
    for (let i = 0; i < totalSquares; i++) {
        square = document.createElement('div');
        square.classList.add('square');

        square.style.width = squareSide;
        square.style.height = squareSide;

        container.appendChild(square);
    }

    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener('mouseover', () => {
        square.style.backgroundColor = HOVERING_SQUARE_COLOR;
    }));
}

function calculateSquareSide(squaresPerSide) {
    return `${SKETCH_FIELD_WIDTH / squaresPerSide}px`;
}

function removeGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}
