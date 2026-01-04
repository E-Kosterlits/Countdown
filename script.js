const days= document.getElementById("days");
const hours= document.getElementById("hours");
const minutes= document.getElementById("minutes");
const seconds= document.getElementById("seconds");

const weddingDate= new Date("October 31 2025 00:00:00").getTime();

function timer() {
    const currentDate= new Date().getTime();
    const distance= weddingDate-currentDate;

    const Days= Math.floor(distance/1000/60/60/24);
    const Hours= Math.floor(distance/1000/60/60)%24;
    const Minutes= Math.floor(distance/1000/60)%60;
    const Seconds= Math.floor(distance/1000)%60;

    days.innerHTML=Math.abs(Days);
    hours.innerHTML=Math.abs(Hours);
    minutes.innerHTML=Math.abs(Minutes);
    seconds.innerHTML=Math.abs(Seconds);

    const Title= document.getElementById("title");
if (Days < 0){
    Title.innerHTML="the Wedding was this long ago:";
    document.body.style.backgroundImage= "url(BGwedding.jpg)";
}
}

setInterval(timer, 1000);



