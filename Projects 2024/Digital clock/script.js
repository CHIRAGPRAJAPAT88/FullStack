function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12; // Convert to 12-hour format
    hours = hours ? hours : 12; // Adjust hour '0' to '12'
    let formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

    document.getElementById('clock').innerText = formattedTime;
}

setInterval(updateClock, 1000);


updateClock();
