const container = document.querySelector('.container');




function createGrid (grid) {

    for (let i = 0; i < grid; i++) {
    
        const squares = document.createElement('div');
        squares.classList.add('squares')
        container.appendChild(squares);
        
    }
    
}

createGrid(32)
