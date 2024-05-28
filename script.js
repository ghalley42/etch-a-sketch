const gridContainer = document.querySelector('div.grid-container');
const newGridButton = document.querySelector('button#new-grid');
const changeColorButton = document.querySelector('button#change-color');
const resetButton = document.querySelector('button#reset');
const randomDrawingButton = document.querySelector('button#random-drawing');
const canvasSize = document.querySelector('h2');
const drawStatus = document.querySelector('p.canvas-p');
const baseDrawStatuses = ['Press D to toggle drawing on and off', 'Drawing is active, press D to deactivate', 'Drawing is deactivated, press D to activate'];
let drawToggle = false;
let theSquares = [];

const createGridSquares = () => {
    removeGrid();
    let squares = getGridSize();
    gridContainer.style = `grid-template-columns: repeat(${squares}, 1fr);`;
    for ( let i = 0; i < squares * squares ;i++ ) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('grid-square');
        gridContainer.append(newSquare);
    };
    theSquares = Array.from(document.querySelectorAll('div.grid-square'));
    canvasSize.textContent = `Canvas Created and is live. Size is ${squares} by ${squares} boxes.`
}

const getGridSize = () => {
    let gridSize = prompt('Enter desired grid size between 10 and 100');
    if ( gridSize == null ) return
    if ( gridSize < 10 || gridSize > 100 ) gridSize = getGridSize();
    return gridSize;
}

const handleMouseEnter = (click) => click.target.style.opacity = Number(click.target.style.opacity) + 0.10;

const addFillListener = () => {
        theSquares.forEach(square => square.addEventListener('mouseover', handleMouseEnter))
};

const removeFillListener = () => {
    theSquares.forEach(square => square.removeEventListener('mouseover', handleMouseEnter))
}

const handleKeyPress = (e) => {
    if ( e.code != 'KeyD' ) return
    drawToggle = !drawToggle;
    if ( drawToggle ){ 
        addFillListener();
        toggleDrawStatus();
    } 
    else { 
        removeFillListener();
        toggleDrawStatus();
    }
}

const toggleDrawStatus = () => {
    drawStatus.textContent = drawStatus.textContent == baseDrawStatuses[1] ? baseDrawStatuses[2] : baseDrawStatuses[1];
}

const removeGrid = () => {
    theSquares.forEach(square => square.remove());
}

const resetGrid = () => {
    theSquares.forEach(square => square.style.opacity = 0);
    drawStatus.textContent = baseDrawStatuses[0];
};

const drawRandom = () => {
    if ( canvasSize.textContent == '' ) return alert('Please create a new grid before using Random Drawing');
    resetGrid();
    theSquares.forEach( (square) => square.style.opacity = Math.random() + 0.2 );
};

newGridButton.addEventListener('click', createGridSquares);
resetButton.addEventListener('click', resetGrid);
randomDrawingButton.addEventListener('click', drawRandom);

document.addEventListener('keypress', handleKeyPress);