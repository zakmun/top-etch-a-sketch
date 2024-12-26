const container = document.querySelector('.container');
const btn = document.querySelector('button')



function createGrid (grid) {

    
    const total = (grid * grid) + grid;
    const mod = grid + 1;

    for (let i = 0; i <= total; i++) {
    
        const squares = document.createElement('div');
        squares.classList.add('squares')
        
        if (i % mod === 0) {
            squares.setAttribute("style", "border: 0; height: 0; width: 100%");
          } else {
            squares.setAttribute("style", "border: 1px solid black; height: 25px; width: 25px");
          }
    container.appendChild(squares);

    squares.addEventListener('mouseover', () => {
        squares.style.backgroundColor = 'pink'
    })

    }

    
}

createGrid(16)

    
btn.addEventListener('click', () => {
    prompt('What size do you want your grid to be?')
})