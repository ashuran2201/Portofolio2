const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");

// const setBg = () => {
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
//     color.innerHTML = "#" + randomColor;
// }

// btn.addEventListener(`click`, setBg);
// setBg();

//Instructions
// 1. declare btn(id) and color(class) object by using dom syntax (getElementById and querySelector)
// 2. setup addEventListener on clicked btn object
// 3. declare the hexColor with # + 6 random number from hex array variable by using for loop function
// 4. create function getRandomNumber() by Math function to get random number of hex variable (length is considerable)
// there is a clue (by using math JS function)

btn.addEventListener("click", () =>{
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor);

    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}
