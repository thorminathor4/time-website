const hours24 = document.getElementById('24h-hours');
const minutes24 = document.getElementById('24h-minutes');
const seconds24 = document.getElementById('24h-seconds');

const hours12 = document.getElementById('12h-hours');
const minutes12 = document.getElementById('12h-minutes');
const seconds12 = document.getElementById('12h-seconds');
const AMPM = document.getElementById('am-pm');

const timezone = document.getElementById('timezone');

let prevTime = new Date();
getTimezone(prevTime);

updateSeconds(prevTime);
updateMinutes(prevTime);
updateHours(prevTime);

updateDate(prevTime);
updateMonth(prevTime);
updateYear(prevTime);

updateClock(prevTime);

setInterval(() => {
    const now = new Date();
    if(prevTime.getSeconds()!==now.getSeconds()){
        updateSeconds(now);
        updateClock(now);
        prevTime = now;
    }
}, 250);

function getTimezone(date){
    const timezoneNumber = prevTime.getTimezoneOffset()/-60;
    timezone.innerText = 'UTC'+(timezoneNumber>=0?'+':'')+timezoneNumber;
}

function updateSeconds(date){
    const secondsString = String(date.getSeconds()).padStart(2, '0');
    seconds24.innerText = secondsString;
    seconds12.innerText = secondsString;
    if(secondsString === '00')
        updateMinutes(date);
}

function updateMinutes(date){
    const minutesString = String(date.getMinutes()).padStart(2, '0');
    minutes24.innerText = minutesString;
    minutes12.innerText = minutesString;
    if(minutesString === '00')
        updateHours(date)
}

function updateHours(date){
    const hours = date.getHours();
    hours24.innerText = String(hours).padStart(2, '0');
    hours12.innerText = (hours==12||hours==0)?12:hours%12;
    AMPM.innerText = (hours<12)?'AM':'PM';
    if(hours==0)
        updateDate(date);
}