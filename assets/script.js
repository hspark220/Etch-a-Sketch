

const container = document.querySelector('.main-container');
container.style.cssText = `width: ${500}px; height: ${500}px;`;

for (let i = 0; i < 25; i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    squares.style.cssText = `width: ${500/5}px; height: ${500/5}px;`
    container.appendChild(squares);
}
    