const containerE1 = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerE1 = document.createElement("div");         //Creates a element "div" each time the loop runs
    colorContainerE1.classList.add("color-container");              //Adding a class ".color-container" to the classList of this newly created "div" element
    containerE1.appendChild(colorContainerE1);                      //Appending this "div" element as a child element of ".container" class
}

const colorContainerE1s = document.querySelectorAll(".color-container");

generateColors();
/*
*  For each and every element of the color-container class=>
*  A new color code will be generated through calling the randomColor() function
*  Then we have to set that color code inside their background-color property
*/
function generateColors(){
    colorContainerE1s.forEach((colorContainerE1)=>{
        const newColorCode = randomColor();                         //newColorCode: the value of colorCode, returned from the function randomColor()
        //console.log(newColorCode);
        colorContainerE1.style.backgroundColor = "#" + newColorCode;//Setting Up the backgroundColor property with the randomly generated color code values
        colorContainerE1.innerHTML = "#" + newColorCode;
    });
}

function randomColor(){
    const chars = "0123456789abcdef";                                //chars: String, initialized with the color code characters from the range of 0-9 and a-f
    const colorCodeLength = 6;
    let colorCode = "";                                              //colorCode: intialized as an empty string
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);  //every randomNum is the floor value of a random number under the range of 16
        //console.log(randomNum);
                                                                     //colorCode Adds a substring of the "chars" string with itself each time the loop runs
        colorCode += chars.substring(randomNum, randomNum + 1);      //randomNum here, is the start position of the substring,
                                                                     //randomNum + 1 is the end position of the substring
        //console.log(colorCode);
    }
    return colorCode;
}
//randomColor();