let clock = document.getElementById('clock');

let timerId;
function myTime() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();

    timerId = setTimeout(myTime, 100);

    clock.innerHTML = ' ' + hour + ':' + minute + ':' + second;


    console.log(hour);
    console.log(minute);
    console.log(second);
}

myTime()