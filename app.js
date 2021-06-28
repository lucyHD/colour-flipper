const button = document.getElementById("button")
const emptySpanForColour = document.getElementById("container__content--span")




//functions

const changeBackgroundColour = (event) => {
    let currentColor = "green";
    document.body.style.background = currentColor;
    emptySpanForColour.innerHTML = currentColor
     
}


//event listener 

button.addEventListener("click", changeBackgroundColour)