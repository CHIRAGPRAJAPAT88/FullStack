setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hourrotation = 30*htime + mtime/2;
    minuterotation = 6*mtime;
    secondrotation = 6*stime;

    hour.style.transform = `rotate(${hourrotation}deg)`;
    minute.style.transform = `rotate(${minuterotation}deg)`;
    second.style.transform = `rotate(${secondrotation}deg)`;
}, 1000);