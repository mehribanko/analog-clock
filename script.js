setInterval(setClock,1000);

const hourHand=document.querySelector('[data-hour-hand]');
const minHand=document.querySelector('[data-minute-hand]');
const secHand=document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate=new Date();
    const secondsRatio=currentDate.getSeconds()/60;
    const minutesRatio=(secondsRatio + currentDate.getMinutes())/60;
    const hoursRatio=(minutesRatio + currentDate.getHours())/12;
    setRotation(hourHand, hoursRatio);
    setRotation(minHand, minutesRatio);
    setRotation(secHand, secondsRatio);
}

function setRotation(element, rotationR){
    element.style.setProperty('--rotation', rotationR * 360);
}

setClock();