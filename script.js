let container = document.querySelector('.container')
let lastGridSize
let color = "black"
let greyLum =90


function gridMaker(gridSize) {
    container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    container.innerHTML= '';

    div = document.createElement('div')
    for (let i=1;i<=gridSize*gridSize;i++) {
        let div = document.createElement('div');
        div.classList.add('pixel');  
        div.style.border = "0.5px solid grey";
        div.onmouseover = (e) => {div.style.backgroundColor = colorFunc(e)};
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
function colorFunc(e) {
    if (color=="rand") { 
       
        let rc=`hsl(${Math.floor(Math.random()*360)},${Math.floor(Math.random()*80)+20}%,${Math.floor(Math.random()*50)+20}%)`
        return (rc)
    } else if(color=="black"){
        return ("rgb(0, 0, 0)")
    } else if(color=="grey") {
        let bg=e.target.style.backgroundColor
        if (bg.match(/rgba/)) {
            let opacity = Number(bg.slice(-4,-1))
            return(`rgba(0, 0, 0, ${opacity + 0.1})`);    
        } else if (bg=="rgb(0, 0, 0)"){
            return("rgb(0, 0, 0)")
        } else {
            return("rgba(0,0,0,0.1")
        }
    } else {
        return color
    }
}


//random color//
let randColor = document.querySelector('#random')
randColor.onclick= () =>{color="rand"}

//black color//
document.querySelector("#black").onclick=()=>{color="black"}

//grey//
document.querySelector("#grey").onclick=()=>{color="grey"}

//custom//
document.querySelector("#custom").onchange=(event)=>{color=event.target.value}


gridMaker(16)