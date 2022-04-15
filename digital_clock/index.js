

setInterval(getTime,1000);

function getTime(){
var date = new Date();
var hour = date.getHours();
var hourText = hour.toString();
var minutes = date.getMinutes();
var minutesText =  minutes.toString();
var seconds = date.getSeconds();
var secondsText = seconds.toString();



if(hourText.length===1){
    document.querySelector("#hours").innerHTML="0"+hour;
}else{
    document.querySelector("#hours").innerHTML=hour;
}


if(minutesText.length===1){
    document.querySelector("#minutes").innerHTML="0"+minutes;
}else{
    document.querySelector("#minutes").innerHTML=minutes;
}


if(secondsText.length===1){
    document.querySelector("#seconds").innerHTML="0"+seconds;
}else{
    document.querySelector("#seconds").innerHTML=seconds;
}

}
