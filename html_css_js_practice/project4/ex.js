const rgb = document.getElementById("rgb");
let reset = document.getElementById("reset");
let buttons = document.querySelectorAll(".square");
const easy = document.getElementById("easy");
const hard = document.getElementById("hard");
// const forHard = document.getElementById("forHard");



hard.addEventListener("click", () => {
    document.querySelectorAll(".square").forEach(button => {
        button.remove();
    });
    for (let i = 0; i < 6; i++) { // 6 yeni kare eklemek için döngüyü 6 kez çalıştırın
        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        document.body.appendChild(newSquare).style.margin = "2px";

        // Yeni kareleri rastgele renklendirin
        let ran = r[Math.floor(Math.random() * r.length)];
        newSquare.style.backgroundColor = ran;
    }
});
easy.addEventListener("click", () => {
    newRGB(3)
    const listOfhex = r_g_b().hexaValues;
    console.log(listOfhex)

    document.querySelectorAll(".square").forEach(square => {
        square.remove();
    });
    for (let i = 0; i < 3; i++) { // 3 yeni kare eklemek için döngüyü 3 kez çalıştırın
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
    }
})

let r = '#'
// for (let i = 0; i < buttons.length; i++) {
//     let ran = r[Math.floor(Math.random() * r.length)];
//     buttons[i].style.backgroundColor = ran;
// }

let renk = "";

buttons.forEach(button => button.addEventListener("click", () => {
    button.style.backgroundColor = renk;
}));





function newRGB(number) {
    hexaValues = [];
    rgbValues = [];
    const listOfRGB = r_g_b(number).rgbValues;
    let i = Math.floor(Math.random()*number);
    rgb.innerHTML = 'rgb(' + listOfRGB[i][0] + ', ' + listOfRGB[i][1] + ', ' + listOfRGB[i][2] + ')';
    console.log('rgb newRGB içinde ', listOfRGB);
}

//random r, g, b kodu oluşturmak için
function rn() {
    return Math.round(Math.random() * 256);
}

let hexaValues = [];
let rgbValues = [];

reset.addEventListener("click", () => {
    newRGB();
})

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