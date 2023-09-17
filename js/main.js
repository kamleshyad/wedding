let daysitem = document.querySelector('#days');
let hoursitem = document.querySelector('#hours');
let minitem = document.querySelector('#min');
let secitem = document.querySelector('#sec');

let countDown = () =>{
    let futureDate = new Date("16 Dec 2023");
    let currentDate = new Date();

    let myDate = futureDate - currentDate;
    //console.log(myDate)

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000 ) % 60;
    
    daysitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;
}

countDown();
setInterval(countDown, 1000)