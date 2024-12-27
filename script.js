const container = document.querySelector('.container');
const btn = document.querySelector('button')


function createGrid(gridSize) {

  container.innerHTML = '';

  const squareSize = container.offsetWidth / gridSize;

  for (let i = 0; i < gridSize * gridSize; i++) {

    const squares = document.createElement('div');
    squares.classList.add('squares');
    squares.style.width = `${squareSize}px`;
    squares.style.height = `${squareSize}px`;
    container.appendChild(squares);

    squares.addEventListener('mouseover', () => {
      squares.style.backgroundColor = 'pink'
    })

  }
}

// Create a 16x16 grid
createGrid(16);

    
btn.addEventListener('click', () => {
     prompt('What size do you want your grid to be?')
})