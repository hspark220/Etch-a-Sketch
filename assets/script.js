// Etch a Sketch project by Odin Project
// by: Heon Soo Park

let conDim = 500;
let numSquPerSide = 5;
let sqrWidth = conDim/numSquPerSide;

const container = document.querySelector('.main-container');
container.style.cssText = `width: ${conDim}px; height: ${conDim}px;`;

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
        const squares = document.createElement('div');
        squares.classList.add('squares');
        squares.style.cssText = `width: ${sqrWidth}px; height: ${sqrWidth}px;`
        container.appendChild(squares);
    }
    
}

updateScreen();

//button for changing the number of squares per side
const changeNumberOfSquare = () => {
    const newNumSquPerSides = prompt("Choose the number of sides for the square");
    numSquPerSide = newNumSquPerSides < 100 ? newNumSquPerSides : 100;
    updateScreen();
}

const changeNumSideBtn = document.querySelector('#change-number-of-sides');
changeNumSideBtn.addEventListener('click', changeNumberOfSquare);