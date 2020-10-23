const FPS = 15; // Set the FPS
const CANVAS_WIDTH = 800; // Set the canvas width
const CANVAS_HEIGHT = 600; // Set the canvas height

var canvas;
var ctx;

var updateList = [];
var resetList  = [];

var pause = false;

document.getElementById("gameCanvas").setAttribute("width",  CANVAS_WIDTH );
document.getElementById("gameCanvas").setAttribute("height", CANVAS_HEIGHT);

document.getElementById("projection").setAttribute("width",  CANVAS_WIDTH );
document.getElementById("projection").setAttribute("height", CANVAS_HEIGHT);

window.onload = function() { // When the document is fully loaded run additional funcions that rely on elements being loaded
	canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    canvasP = document.getElementById('projection');
    ctxP = canvasP.getContext('2d');
    //loads all images and automatically starts game when done
    drawLoadingScreen(); //optional draw loading screen
	loadImages();
};

function startGame() { //starts game (func called after images load)
	setupInput();
	setInterval(updateAll, 1000/FPS);
  resetGame();
}

function updateAll() { // Update all variables
  if (!pause){
    for (var i in updateList){
      updateList[i].f();
    }
  }
}

function resetGame() { // Restart the game
  pause = false;
  for (var i in resetList) {
    resetList[i].f();
  }
}