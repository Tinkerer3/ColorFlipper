let colorName = document.getElementById("colorName");
let normalColorNames = ["Salmon","Gold","LawnGreen","DarkCyan","DarkTurquoise","Olive"];
let hexColorNames = ["#B8860B", "#800000","#00BFFF","#9ACD32","#F0E68C","#FF4500"]
let textInput = document.getElementById("text-input")
isHax = false;

function haxOn(){
    isHax = true;
}

function haxOff(){
    isHax = false;
}

function onClick(){
    if (isHax){
    let item = hexColorNames[Math.floor(Math.random()*hexColorNames.length)];
    document.body.style.background = item;
    colorName.innerHTML = item; 
    }
    else{
    let item = normalColorNames[Math.floor(Math.random()*normalColorNames.length)];
    document.body.style.background = item;
    colorName.innerHTML = item;
    }
    
}

function onClickInput(){
    document.body.style.background =`#${textInput.value}` ;
    colorName.innerHTML = textInput.value;
}