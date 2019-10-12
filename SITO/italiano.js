// video 1
function play1(){
    const video = document.querySelector("#video");
    video.play();
}

function stop1(){
    const video = document.querySelector("#video");
    video.pause();
}

function cambiaVolume1(evento){
    video.volume = evento.target.value;
}

function avanzaDieciSecondi1(){
    var tempo=video.currentTime;
    video.currentTime = tempo+10.0;
}

function avanzaTrentaSecondi1(){
    var tempo=video.currentTime;
    video.currentTime = tempo+30.0;
}

function avanzaMinuto1(){
    var tempo=video.currentTime;
    video.currentTime = tempo+60.0;
}

// video 2

function play2(){
    const video2 = document.querySelector("#video2");
    video2.play();
}

function stop2(){
    const video2 = document.querySelector("#video2");
    video2.pause();
}

function cambiaVolume2(evento){
    video2.volume = evento.target.value;
}

function avanzaDieciSecondi2(){
    var tempo=video2.currentTime;
    video2.currentTime = tempo+10.0;
}

function avanzaTrentaSecondi2(){
    var tempo=video2.currentTime;
    video2.currentTime = tempo+30.0;
}

function avanzaMinuto2(){
    var tempo=video2.currentTime;
    video2.currentTime = tempo+60.0;
}

// video 3

function play3(){
    const video3 = document.querySelector("#video3");
    video3.play();
}

function stop3(){
    const video3 = document.querySelector("#video3");
    video3.pause();
}

function cambiaVolume3(evento){
    video3.volume = evento.target.value;
}

function avanzaDieciSecondi3(){
    var tempo=video3.currentTime;
    video3.currentTime = tempo+10.0;
}

function avanzaTrentaSecondi3(){
    var tempo=video3.currentTime;
    video3.currentTime = tempo+30.0;
}

function avanzaMinuto3(){
    var tempo=video3.currentTime;
    video3.currentTime = tempo+60.0;
}