let minute = document.getElementById('minute');
let second = document.getElementById('second');

let i = 0, j = 1;
let timerId;

function start() {
    if(timerId) {  //timer çalışıyo x2 olmasın diye 
        clearTimeout(timerId);
    }
    (i < 10) ? second.innerHTML = "0" + i : second.innerHTML = i;
    i++;
    
    if (i < 100) {
        timerId = setTimeout(start, 10);
    }
    else if (i == 100) {
        second.innerHTML = "00"
        i = 0;
        (j < 10) ? minute.innerHTML = "0" + j : minute.innerHTML = j;
        j++;
        timerId = setTimeout(start, 10);
    }

}

function stop() {
    clearTimeout(timerId);
}

function reset() {
    hour.innerHTML = "00";
    minute.innerHTML = "00";
    second.innerHTML = "00";
    i = 0;
    j = 1;
}
