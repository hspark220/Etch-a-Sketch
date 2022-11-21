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

/*
pseudo code for looping the squares
 - while loop checking if the height of square has been passed
 - for loop inside while going through each rows

*/
const updateScreen = () => {
    //remove old squares
    const oldSquares = document.querySelectorAll('.squares');
    oldSquares.forEach(square => {
        square.remove();
    });

    sqrWidth = conDim/numSquPerSide;
    for (let i = 0; i < numSquPerSide**2; i++) {
        const square = document.createElement('div');
        square.classList.add('squares');
        square.style.cssText = `width: ${sqrWidth}px; height: ${sqrWidth}px;`
        square.addEventListener('mouseover', changeColor)
        square.addEventListener('mousedown', changeColor);
        container.appendChild(square);

        // square.addEventListener('mouseover', (changeColor) => {
        //     square.style.backgroundColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`;
        // });
    }
    
}

const changeColor = (e) => {
    e.target.style.backgroundColor = `rgb(${ranNum()}, ${ranNum()}, ${ranNum()})`;
}




//button for changing the number of squares per side
const changeNumberOfSquare = () => {
    const newNumSquPerSides = prompt("Choose the number of sides for the square");
    numSquPerSide = newNumSquPerSides < 100 ? newNumSquPerSides : 100;
    updateScreen();
}

const changeNumSideBtn = document.querySelector('#change-number-of-sides');
changeNumSideBtn.addEventListener('click', changeNumberOfSquare);

updateScreen();