// Etch a Sketch project by Odin Project
// by: Heon Soo Park

let conDim = 500;
let numSquPerSide = 10;
let sqrWidth = conDim/numSquPerSide;

const container = document.querySelector('.main-container');
container.style.cssText = `width: ${conDim}px; height: ${conDim}px;`;

/*
pseudo code for looping the squares
 - while loop checking if the height of square has been passed
 - for loop inside while going through each rows

*/

for (let i = 0; i < numSquPerSide**2; i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    squares.style.cssText = `width: ${sqrWidth}px; height: ${sqrWidth}px;`
    container.appendChild(squares);
}
    