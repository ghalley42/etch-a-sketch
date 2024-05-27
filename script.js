const gridContainer = document.querySelector('div.grid-container');

const createGridSquares = (squares) => {
    gridContainer.style = `grid-template-columns: repeat(${squares}, auto);`;
    for ( let i = 0; i < squares * squares ;i++ ) {
        let newSquare = document.createElement('div');
        newSquare.classList.add('grid-square');
        gridContainer.append(newSquare);
    };
}

const addFillListener = () => {
        let theSquares = Array.from(document.querySelectorAll('div.grid-square'));
        theSquares.forEach(square => square.addEventListener('mouseenter', (e) => {
            square.classList.add('filled');
        }));
}