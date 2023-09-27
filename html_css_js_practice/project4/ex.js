const rgb = document.getElementById("rgb");
let reset = document.getElementById("reset");
let buttons = document.querySelectorAll(".square");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
const result = document.getElementById("result");
// const forHard = document.getElementById("forHard");


let lastClickedButton = null;

hard.addEventListener("click", function(event){
    lastClickedButton = event.target;
    resetFunc(6)
})
easy.addEventListener("click",  function(event){
    lastClickedButton = event.target;
    resetFunc(3);
})

let r = '#'



function newRGB(number) {
    hexaValues = [];
    rgbValues = [];
    const listOfRGB = r_g_b(number).rgbValues;
    let i = Math.floor(Math.random() * number);
    rgb.innerHTML = 'rgb(' + listOfRGB[i][0] + ', ' + listOfRGB[i][1] + ', ' + listOfRGB[i][2] + ')';
    console.log('rgb newRGB içinde ', listOfRGB);
}

//random r, g, b kodu oluşturmak için
function rn() {
    return Math.round(Math.random() * 256);
}

let hexaValues = [];
let rgbValues = [];

reset.addEventListener("click", function() {
    if(lastClickedButton === 'easy') { 
        resetFunc(3)
    }
    else if(lastClickedButton === 'hard') {
        resetFunc(6)
    }
})
function resetFunc(units){

    result.innerHTML = "<span style='font-size:50px;'>&#9203;</span>"
    newRGB(units)
    const listOfhex = r_g_b().hexaValues;
    console.log(listOfhex)
    document.querySelectorAll(".square").forEach(square => {
        square.remove();
    });
    for (let i = 0; i < units; i++) { // 3 yeni kare eklemek için döngüyü 3 kez çalıştırın
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        document.body.appendChild(newSquare).style.margin = "2px";


        console.log(i)
        for (let j = 0; j < 3; j++) {
            r += listOfhex[i][j];
            console.log(r);
        }
        newSquare.style.backgroundColor = r;
        r = '#'

        newSquare.addEventListener("click", () => {
            if (newSquare.style.backgroundColor == rgb.innerHTML) {
                result.innerHTML = "oooh beee oley beee";
                newSquare.style.backgroundColor = "white"
                newSquare.textContent = "YEES!"
            }
        });
    }
}
function r_g_b(number) {

    for (let i = 0; i < number; i++) {
        let r = rn();
        let g = rn();
        let b = rn();

        rgbValues.push([r, g, b]);

        hexaValues.push([rgbToHex(r), rgbToHex(g), rgbToHex(b)]);
    }
    return { rgbValues, hexaValues };
}

// console.log('en altta tanımlı ' , r_g_b());

function rgbToHex(value) {
    value = value.toString(16);
    if (value.length === 1)
        value = "0" + value;
    return value;
}