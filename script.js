const container = document.querySelector('.container');
const btn = document.querySelector('button')


function createGrid(gridSize) {
  container.innerHTML = '';

  // Calculate the size of each square
  const squareSize = container.offsetWidth / gridSize;

  // Create grid squares
  for (let i = 0; i < gridSize * gridSize; i++) {
    const squares = document.createElement('div');
    squares.classList.add('squares');
    // Apply the calculated size to each square
    squares.style.width = `${squareSize}px`; // Set the width
    squares.style.height = `${squareSize}px`; // Set the height
    container.appendChild(squares); // Add the square to the container
  }
}

// Create a 16x16 grid
createGrid(16);

    
btn.addEventListener('click', () => {
     prompt('What size do you want your grid to be?')
})