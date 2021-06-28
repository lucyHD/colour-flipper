const button = document.getElementById("button");
const emptySpanForColour = document.getElementById("container__content--span");
const squareOfColour = document.getElementById("squareOfColour")
const colours = ['green', 'blue', 'yellow', 'orange', 'purple']



//functions

const changeBackgroundColour = (event) => {
    let currentColor = colours[Math.floor(Math.random() * 5)]

    let colorWithCapitalFirstLetter = (currentColor.slice(0, 1)).toUpperCase() + currentColor.slice(1)

    document.body.style.background = currentColor;
    emptySpanForColour.innerHTML = colorWithCapitalFirstLetter; 
     
}

const changeSquareColour = () => {
    let currentColor = colours[Math.floor(Math.random() * 5)]
    squareOfColour.style.backgroundColor = currentColor;

}

//event listener 

button.addEventListener("click", changeBackgroundColour)
button.addEventListener("click", changeSquareColour); 