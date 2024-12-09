
let hours = document.getElementById('hours');
let mins = document.getElementById('mins');
let secs = document.getElementById('secs');


function countdown() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
}
setInterval(countdown, 1000);




