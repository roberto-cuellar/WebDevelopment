let nIntervId; // The id of the interval that are running
var miles = 0;
var tens = 0;
var seconds = 0;

document.querySelector("#btnStart").addEventListener("click",initCount);
document.querySelector("#btnStop").addEventListener("click",stopCount);
document.querySelector("#btnReset").addEventListener("click",resetCount);

function initCount(){
    if(!nIntervId){
        nIntervId = setInterval(count,10);
    }
}

function count(){
    miles++;
    if(miles===10){
        tens++;
        miles =0;
    }
    if(tens===10){
        seconds++;
        tens = 0;
    }
    var der = tens*10+miles;
    var derTextLength = der.toString().length;


    var secTextLength = seconds.toString().length;
    if(derTextLength===1){
        $("#tens").text("0"+der);    
    }else{
        $("#tens").text(der);
    }
    
    if(secTextLength===1){
        $("#seconds").text("0"+seconds);   
    }else{
        $("#seconds").text(seconds);   
    }
    
    
}

function stopCount(){
    clearInterval(nIntervId);
    nIntervId = null;
}

function resetCount(){
    stopCount();
    miles = 0;
    tens = 0;
    seconds = 0;
    $("#tens").text("00");
    $("#seconds").text("00");   
}

