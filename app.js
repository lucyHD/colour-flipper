const button = document.getElementById("button");
const emptySpanForColour = document.getElementById("container__content--span");
const colours = ['green', 'blue', 'yellow', 'orange', 'purple', 'orange', 'lightblue', 'red', 'lightgreen', 'white', 'pink']
const colourPicker = document.getElementsByClassName("color-picker");
const letters = ['A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f']
const numbers = [0,1,2,3,4,5,6,7,8,9]



//functions

const changeBackgroundColour = (event) => {
    let currentColor = colours[Math.floor(Math.random() * 10)]

    let colorWithCapitalFirstLetter = (currentColor.slice(0, 1)).toUpperCase() + currentColor.slice(1)

    document.body.style.background = currentColor;
    emptySpanForColour.innerHTML = colorWithCapitalFirstLetter; 
     
}


const changeBackGroundColourHex = () => {

    let currentLetter = letters[Math.floor(Math.random() * 11)]
    let currentNumber = Math.floor(Math.random() * 9)

    let hexNumber = currentLetter + currentNumber + '';
    console.log(hexNumber)
    console.log(hexNumber,hexNumber,hexNumber)
    //generate a hex color 
        
    //change current color to be hex colour
    //fill empty span with hex colour #234345
    
}


//event listeners

button.addEventListener("click", changeBackGroundColourHex);
