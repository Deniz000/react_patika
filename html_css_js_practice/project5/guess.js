let buttons = document.getElementById('a');
let units = 3; // units değişkenini tanımlayın ve gerekli değeri atayın

for (let i = 0; i < units; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("wrapper");
    buttons.appendChild(newSquare);
}
