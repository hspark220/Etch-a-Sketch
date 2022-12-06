// Etch a Sketch project by Odin Project
// by: Heon Soo Park

let conDim = 500;
let numSquPerSide = 5;
let oldNumSquPerSide;
let sqrWidth = conDim/numSquPerSide;

const modeSelector = document.getElementById('color-mode');
const colorSelector = document.getElementById('color');
let colorMode = modeSelector.value;

const sideRange = document.getElementById('number-of-sides');

const container = document.querySelector('.main-container');
container.style.cssText = `width: ${conDim}px; height: ${conDim}px;`;



const ranNum = () => {
    const random = Math.floor(Math.random()*255);
    return random;
}


const updateScreen = () => {
    removeOldSquares();

    sqrWidth = conDim/numSquPerSide;
    for (let i = 0; i < numSquPerSide**2; i++) {
        const square = document.createElement('div');
        square.classList.add('squares');
        square.style.cssText = `width: ${sqrWidth}px; height: ${sqrWidth}px;`
        square.addEventListener('mouseover', changeColor)
        container.appendChild(square);
    }
    
}

const changeColor = (e) => {
    if (colorMode == 'random') {
        e.target.style.backgroundColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`;
    } else if (colorMode == 'black') {
        e.target.style.backgroundColor = `rgb(0,0,0)`;
    } else if (colorMode == 'choose') {
        e.target.style.backgroundColor = colorSelector.value;
    }

    console.log(colorSelector.value)
    
}

const removeOldSquares = () => {
    const oldSquares = document.querySelectorAll('.squares');
    oldSquares.forEach(square => {
        square.remove();
    });
}

const updateChange = () => {
    oldNumSquPerSide = numSquPerSide;
    numSquPerSide = sideRange.value;
    colorMode = modeSelector.value;
    colorSelector.type = colorMode == 'choose' ? 'color' : 'hidden';
    updateScreen();
}

const updateBtn = document.querySelector('#update');
updateBtn.addEventListener('click', updateChange);

updateScreen();