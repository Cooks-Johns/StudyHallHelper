// This is how we are testing 

function showMovesToolForBuilding() {
    var i = 0;
    var moves = setInterval(function(){
        playGame(game.yourGame[i]);
        i++;
        if (i >= game.yourGame.length) {
            clearInterval(moves);
        }
    }, 800);

    reset();
}

// NO Right Click - this will make it so that the user cannot Right-Click
function f1() {
  if(document.all) { return false; }
}
function f2(e) {
  if(document.layers || (document.getElementById &! document.all)) {
    if(e.which==2 || e.which==3) { return false; }
  }
}
if(document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = f1;
}
else {
  document.onmouseup = f2;
  document.oncontextmenu = f1;
}
document.oncontextmenu = new function("return false");


// Added switch case that 
function colorfunc() {
 
var colorname = document.getElementById(“selcolor”).value;
 
switch(colorname){
 
    case ‘Black’:
 
    alert (“Black is chosen”);
 
    document.getElementById(“p1”).style.color = “black”;
 
    break;
 
    case ‘Yellow’:
 
    alert (“Yellow is chosen”);
 
    document.getElementById(“p1”).style.color = “Yellow”;
 
    break;
 
    case ‘Red’:
 
    alert (“Red is chosen”);
 
    document.getElementById(“p1”).style.color = “Red”;
 
    break;
 
    default :
 
    alert (“Green is chosen”);
 
    document.getElementById(“p1”).style.color = “green”;
 
    break;               
 
}
 
}
