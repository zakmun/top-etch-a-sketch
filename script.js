const container = document.querySelector('.container');
const btn = document.querySelector('button')
const randBtn = document.querySelector('button')


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
    squares.style.backgroundColor = 'rgb(0 0 0 / 10%)';
    squares.style.backgroundColor = randBtn;


    randBtn.addEventListener('click', () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      console.log(randomColor);

      });
    
      
    })

   
}
}



function userGridChoice () {

  createGrid(16)
  
  btn.addEventListener('click', () => {
    let gridPrompt = prompt('What size do you want your grid to be?')
    const gridSize = Number(gridPrompt)
    if (isNaN(gridSize) || gridSize >= 100 || gridSize == "") {
      alert('Please enter a valid number less than 100')
    } else {
      createGrid(gridSize)
    }

})
  

}




userGridChoice()
