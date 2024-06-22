// Countdown Timer
const countdown = () => {
    const countDate = new Date("August 9, 2023 15:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Check if the countdown has ended
    if (gap < 0) {
        document.querySelector('#days').innerText = '00';
        document.querySelector('#hours').innerText = '00';
        document.querySelector('#minutes').innerText = '00';
        document.querySelector('#seconds').innerText = '00';
        return;
    }

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('#days').innerText = textDay < 10 ? '0' + textDay : textDay;
    document.querySelector('#hours').innerText = textHour < 10 ? '0' + textHour : textHour;
    document.querySelector('#minutes').innerText = textMinute < 10 ? '0' + textMinute : textMinute;
    document.querySelector('#seconds').innerText = textSecond < 10 ? '0' + textSecond : textSecond;
};

countdown();
const intervalId = setInterval(countdown, 1000);











