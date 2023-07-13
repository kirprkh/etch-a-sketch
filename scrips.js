const DEFAULT_NUMBER_OF_SQUARES_PER_SIDE = 16;
const HOVERING_SQUARE_COLOR = 'orange';
const SKETCH_FIELD_WIDTH = 500;

const container = document.querySelector('#grid-container');

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

function changeGrid(squaresPerSide) {
    removeGrid();
    createGrid(squaresPerSide);
}

function getSquaresPerSide() {
    const squaresPerSide = +prompt('Squares per side?');
    if (!Number.isInteger(squaresPerSide) 
    || !hasAppropriateRange(squaresPerSide)) {
        return DEFAULT_NUMBER_OF_SQUARES_PER_SIDE;
    }
    return squaresPerSide;
}

function hasAppropriateRange(squaresPerSide) {
    return squaresPerSide > 0 && squaresPerSide <= 100;
}

const gridButton = document.querySelector('#grid-button');
gridButton.addEventListener('click', () => {
    const squaresPerSide = getSquaresPerSide();
    changeGrid(squaresPerSide);
});

const borderButton = document.querySelector('#border-button');
borderButton.addEventListener('click', () => {
    if (borderButton.textContent.includes('Hide')) {
        document.querySelectorAll('.square').forEach(square => square.classList.add('no-border'));
        borderButton.textContent = 'Show border';
    } else {
        document.querySelectorAll('.square').forEach(square => square.classList.remove('no-border'));
        borderButton.textContent = 'Hide border';
    }
});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    document.querySelectorAll('.square').forEach(square => square.style.backgroundColor = 'white');
});

createGrid(DEFAULT_NUMBER_OF_SQUARES_PER_SIDE);