let gridDimension = 16;
let totalBoxes = 0;
let boxAdder = "";
let boxBackground = "";
let newBackground = "";
const container = document.getElementById('container');
const resetButton = document.getElementById('reset');

function defineGrid() {
    totalBoxes = gridDimension * gridDimension;
    for (let i = 0; i < totalBoxes; i++) {
        boxAdder += '<div class="box" style="background-color: rgba(0, 0, 0, 0.0)"></div>';
    }
    container.innerHTML = boxAdder;
    container.style.gridTemplateRows = `repeat(${gridDimension}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${gridDimension}, 1fr)`;
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('mouseenter', function(e) {
            boxBackground = item.getAttribute('style').slice(-4,-1);
            boxBackground = Math.round(10*((boxBackground * 1) + 0.1))/10;
            if (boxBackground == 1) return;
            item.setAttribute('style', `background-color: rgba(0, 0, 0, ${boxBackground})`);
            console.log(boxBackground);

        })
      })
}

function resetGrid() {
    for (let c = container.firstChild; c !== null; c = container.firstChild) {
        container.removeChild(c);
      }
    boxAdder = "";
    gridDimension = prompt('How many squares per side?');
    defineGrid();
};

defineGrid();

resetButton.addEventListener('click', resetGrid);
