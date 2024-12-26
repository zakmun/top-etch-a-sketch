const container = document.querySelector('.container');




function createGrid (numberPerRow) {

    
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;

    for (let i = 0; i <= total; i++) {
    
        const squares = document.createElement('div');
        squares.classList.add('squares')
        
        if (i % mod === 0) {
            squares.style.cssText = "border: 0; height: 0; width: 100%";
          } else {
            squares.style.cssText = "border: 1px solid black; height: 25px; width: 25px";
          }
    container.appendChild(squares);

    }
    
}

createGrid(16)
