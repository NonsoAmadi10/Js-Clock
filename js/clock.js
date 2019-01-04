let secondHand = document.querySelector('.second-hand');
let mins = document.querySelector('.mins-hand');
let  hour = document.querySelector('.hour-hand');


function setTime(){
    const now = new Date();
    
    const seconds = now.getSeconds();
    const secondDegree = ((seconds/60) * 360) + 90;
    const min = now.getMinutes();
    const minDegree = ((min / 60)*360) + 90;
    const Hour = now.getHours();
    const hourDegree = ((Hour / 12) *360) + 90;
    secondHand.style.transform = `rotate(${secondDegree}deg)`;
    mins.style.transform = `rotate(${minDegree}deg)`;
    hour.style.transform = `rotate(${hourDegree}deg)`;
    console.log(min);



}
setInterval(setTime, 1000);