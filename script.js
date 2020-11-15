let clocksec = document.querySelector('.clock-sec')
let clockmin = document.querySelector('.clock-min')
let clockHour = document.querySelector('.clock-hour')

function setTime() {
    let date = new Date;
    const seconds = date.getSeconds();
    const secondsDegree = seconds * 6 + 90;
    clocksec.style.transform = `rotate(${secondsDegree}deg)`;
    const min = date.getMinutes();
    const minDegree = min * 6 + 90;
    clockmin.style.transform = `rotate(${minDegree}deg)`;
    const hours = date.getHours();
    const hourDegree = hours * 30 + 90;
    clockHour.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(() => {
    setTime()
}, 1000);