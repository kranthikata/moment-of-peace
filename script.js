let timerTextEl = document.getElementById("timerText");

let notificationSound = new Audio("./aipaye.mp3");
let timerId = null;
function displayTimer(btnId){
    clearInterval(timerId);
    let strTime = document.getElementById(btnId).textContent;
    let startTime = strTime[0];
    if(startTime>1){
        startTime = parseInt(startTime)*10;
    }
    else{
        startTime = 60;
    }
    
    timerTextEl.textContent = startTime + " seconds left";
    timerId = setInterval(function(){
        startTime = startTime - 1;
        timerTextEl.textContent = startTime + " seconds left";
        if(startTime === 0){
            clearInterval(timerId);
            timerTextEl.textContent = "Your moment is complete";
            notificationSound.play();
        }
    },1000);
}