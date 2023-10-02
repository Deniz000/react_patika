// Sayfa yüklendiğinde çalışacak olan fonksiyon
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'
    , 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't'
    , 'u', 'v', 'w', 'x', 'y', 'z'];
window.onload = function () {
    let buttons = document.getElementById("buttons");
    let inputs = document.getElementById("inputs");

    for (let i = 0; i <= 19; i++) {
        let div = document.createElement("div");
        div.className = "box";
        div.textContent = letters[i];
        buttons.appendChild(div);
    }

    let separator = document.createElement("div");
    separator.style.width = "100%"; 
    separator.style.height = "10px"; // Ayırıcı için istediğiniz yüksekliği ayarlayabilirsiniz.
    buttons.appendChild(separator);

    for (let i = 20; i <= 25; i++) {
        let div = document.createElement("div");
        div.className = "box";
        div.textContent = letters[i];
        buttons.appendChild(div);
    }

    for(let i = 0; i <= 5; i++) {
         let newInput = document.createElement('input');
         newInput.type = "text";
         newInput.className = 'input-letter'
         inputs.appendChild(newInput);
    }
};
