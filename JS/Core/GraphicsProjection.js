updateList.push({ f: () => drawAllP()});

var drawListP = []; // Create an empty array

function drawAllP() { // Define a function
  drawRectP(0, 0, canvas.width, canvas.height, "black"); // Call another function

  //sorts drawList by layers
  drawListP.sort(function (a, b) { return b.l - a.l; });

  //draws in order of layers (lowest layer are drawn in front)
  for (var i = 0; i < drawListP.length; i++) {
      drawListP[i].f(); // Call another function
  }
}

function drawRectP(x, y, width, height, color, alpha) { // Define a function
  var alphaTemp = alpha || 1; // Definition of a variable with a backup clause
  ctxP.globalAlpha = alphaTemp; // Definition of a variable
  ctxP.fillStyle = color || "white"; // Definition of a variable with a backup clause
  ctxP.fillRect(x, y, width, height); // Call another function
  ctxP.globalAlpha = 1; // Definition of a variable
}

function drawCircleP(x, y, radius, color) { // Define a function
  ctxP.fillStyle = color || "white"; // Definition of a variable with a backup clause
  ctxP.beginPath(); // Call another function
  ctxP.arc(x, y, radius, 0, Math.PI * 2, true); // Call another function
  ctxP.fill(); // Call another function
}

function drawTextP(words, textX, textY, fillColor, font, align, baseline) { // Define a function
  ctxP.font = font || "20px Arial"; // Definition of a variable with a backup clause
  ctxP.textAlign = align || "start"; // Definition of a variable with a backup clause
  ctxP.textBaseline = baseline || "alphabetic"; // Definition of a variable with a backup clause
  ctxP.fillStyle = fillColor || "white"; // Definition of a variable with a backup clause
  ctxP.fillText(words, textX, textY); // Call another function
}

function drawImageP(image, x, y, ang, scaleX, scaleY, alpha) { // Define a function
  ctxP.save();
  ctxP.translate(x, y); // Call another function
  var angTemp = ang || 0; // Definition of a variable with a backup clause
  ctxP.rotate(angTemp); // Call another function
  var scaleXTemp = scaleX || 1; // Definition of a variable with a backup clause
  var scaleYTemp = scaleY || 1; // Definition of a variable with a backup clause
  ctxP.scale(scaleXTemp, scaleYTemp);
  var alphaTemp = alpha || 1; // Definition of a variable with a backup clau
  ctxP.globalAlpha = alphaTemp; // Definition of a variable
  ctxP.drawImage(image, -image.width / 2, -image.height / 2); // Call another function
  ctxP.globalAlpha = 1; // Definition of a variable
  ctxP.scale(1, 1); // Call another function
  ctxP.restore(); // Call another function
}

