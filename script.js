const days= document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");

const weddingDate= new Date("October 30 2025 00:00:00").getTime();

function timer() {
    const currentDate= new Date().getTime();
    const distance= weddingDate-currentDate;

    const Days= Math.floor(distance/1000/60/60/24);
    const Hours= Math.floor(distance/1000/60/60)%24;
    const Minutes= Math.floor(distance/1000/60)%60;
    const Seconds= Math.floor(distance/1000)%60;

    days.innerHTML=Days;
    hours.innerHTML=Hours;
    minutes.innerHTML=Minutes;
    seconds.innerHTML=Seconds;

}

setInterval(timer, 1000);