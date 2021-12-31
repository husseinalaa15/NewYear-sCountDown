// first month is 00 , Js counts it from 0 to 11 


let newYear = new Date(2022,00,01);
let secLeft = document.querySelector("#sec"); 
let minLeft = document.querySelector("#mins"); 
let hursLeft = document.querySelector("#hurs"); 
let daysLeft = document.querySelector("#days"); 

function countDown(){
    let currentDate = new Date();
    // kda 7wlnaha le seconds 
    let totalSeconds = (newYear - currentDate) / 1000;

    let seconds = Math.floor(totalSeconds) % 60;
    let minuts = Math.floor(totalSeconds / 60) % 60;
    let hurs = Math.floor(totalSeconds / 3600) % 24;
    let days = Math.floor(totalSeconds / 3600 / 24) ;

  

    secLeft.innerHTML = seconds;
    minLeft.innerHTML = minuts;
    hursLeft.innerHTML = hurs;
    daysLeft.innerHTML = days;



}
countDown();


let quote = document.querySelector(".quote");

let quotesList = [  'Love For All, Hatred For None.' ,
                    'Change the world by being yourself.',
                    'Every moment is a fresh beginning.',
                    'Never regret anything that made you smile.',
                    'Die with memories, not dreams. ',
                    'Aspire to inspire before we expire.'];

function GenerateQuotes() { 
    let i = (Math.random() * quotesList.length ) | 0;
    quote.innerHTML = quotesList[i];
}







setInterval(countDown,1000);
