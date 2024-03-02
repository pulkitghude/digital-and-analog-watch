// By Engineer Elhamuddin Taheri
// getting element in Js
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second  = document.getElementById('second');
const digital = document.getElementById('digital');

// the function  for making our clock dynamic
function clock(){
    const now = new Date();
    const n_hour = now.getHours();
    const n_minute = now.getMinutes();
    const n_second = now.getSeconds();

    const hour_angle = (n_hour % 12) * 30 + (n_minute / 60) * 30 + 90;
    const minute_angle = n_minute * 5 + (n_second / 60) * 6 + 85;
    const second_angle = n_second * 6 + 85;

    hour.style.transform = `rotate($(hour_angle)deg)`;
    minute.style.transform = `rotate($(minute_angle)deg)`;
    second.style.transform = `rotate($(second_angle)deg)`;

    digital.textContent = `${n_hour}  : ${n_minute} : ${n_second}`;
}

setInterval(clock,1000)