const secondHand = document.getElementsByClassName('second-hand')[0];
const minuteHand = document.getElementsByClassName('minute-hand')[0];
const hourHand = document.getElementsByClassName('hour-hand')[0];
function updateClock(date){
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hour = date.getHours()%12;
    const secondsAngle = seconds*6;
    const minutesAngle = minutes*6 + seconds/10;
    const hoursAngle = hour*30 + minutes/2;
    setAngle(secondHand, secondsAngle);
    setAngle(minuteHand, minutesAngle);
    setAngle(hourHand, hoursAngle);
}

function setAngle(element,angle){
    element.style.setProperty('--angle',angle);
}