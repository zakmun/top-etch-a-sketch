const container = document.querySelector('.container');
const btn = document.querySelector('button')


function createGrid (gridSize) {

  container.innerHTML= ""
  
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



function userGridChoice () {

  createGrid(16)
  
  btn.addEventListener('click', () => {
    let gridPrompt = prompt('What size do you want your grid to be?')
    const gridSize = Number(gridPrompt)
    if (isNaN(gridSize) || gridSize >= 100) {
      alert('Please enter a valid number less than 100')
    } else {
      createGrid(gridSize)
    }

})
  
}


userGridChoice()
