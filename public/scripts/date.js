const monthNames = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
const weekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const ordinals = ['th','st','nd','rd','th','th','th','th','th','th'];
const millisPerDay = 86400000;

const weekday = document.getElementById("weekday");
const week = document.getElementById('week');

const year1 = document.getElementById('year1');
const monthNumber = document.getElementById('month');
const date1 = document.getElementById('date1');

const year2 = document.getElementById('year2');
const monthName = document.getElementById('month-name');
const date2 = document.getElementById('date2');

function updateDate(date){
    const dateNumber = date.getDate();
    date1.innerText = dateNumber;
    const ordinalIndex = (dateNumber/10!==1)?dateNumber%10:0;
    date2.innerText = dateNumber + ordinals[ordinalIndex];
    weekday.innerText = weekdays[date.getDay()];
    updateWeek(date);
    if(dateNumber === 1)
        updateMonth(date);
}

function updateWeek(date){
    const janFirst = new Date(date.getFullYear(),0,1);
    const firstWeekDay = janFirst.getDay();
    const daysIntoYear = Math.floor((date - janFirst) / millisPerDay);
    const weeksIntoYear = Math.floor(daysIntoYear/7);
    //console.log(janFirst, firstWeekDay, daysIntoYear, weeksIntoYear);
    week.innerText = weeksIntoYear;
}

function updateMonth(date){
    const month = date.getMonth()
    monthNumber.innerText = month+1;
    monthName.innerText = monthNames[month];
    if(month === 0)
        updateYear(date)
}

function updateYear(date){
    const year = date.getFullYear();
    year1.innerText = year;
    year2.innerText = year;
}