// Etch a Sketch project by Odin Project
// by: Heon Soo Park

let conDim = 500;
let numSquPerSide = 5;
let sqrWidth = conDim/numSquPerSide;

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
    e.target.style.backgroundColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`;
}

const removeOldSquares = () => {
    const oldSquares = document.querySelectorAll('.squares');
    oldSquares.forEach(square => {
        square.remove();
    });
}

const changeNumberOfSquare = () => {
    const newNumSquPerSides = prompt("Choose the number of sides for the square");
    numSquPerSide = newNumSquPerSides < 100 ? newNumSquPerSides : 100;
    updateScreen();
}

const changeNumSideBtn = document.querySelector('#change-number-of-sides');
changeNumSideBtn.addEventListener('click', changeNumberOfSquare);

updateScreen();