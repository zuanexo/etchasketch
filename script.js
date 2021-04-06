let container = document.querySelector('.container')
let lastGridSize


function gridMaker(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.innerHTML= '';

    div = document.createElement('div')
    for (let i=1;i<=gridSize*gridSize;i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');  
        div.style.border = "0.5px solid grey";
        div.onmouseover = () => {div.style.backgroundColor = 'black'};
        container.appendChild(div);
    
    }
    lastGridSize=gridSize
}



//reset button//
let button = document.querySelector('.button')
button.onclick = () =>{
    userGrid = prompt("Enter a number between 1-100 to select grid size", lastGridSize);
    userGridInt =parseInt(userGrid, 10);
    if (userGridInt==NaN||userGridInt>100||userGridInt<1) {
        alert("Please enter a valid number. Try again.")
    } else {
        gridMaker(userGridInt)
    }
}

gridMaker(16)