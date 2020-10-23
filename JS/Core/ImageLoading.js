var imageList = []; // Empty array

var imagesToLoad = 0; // Set automatically

function loadImages() { // Define a function
	if (imageList.length > 0) { // If there are any images to load...
		imagesToLoad = imageList.length;
		for (var i in imageList) { // Load each image into the document
			var name = srcToName(imageList[i]);
			window[name] = document.createElement("img");
			window[name].onload = countLoaded();
			window[name].src = imageList[i];
		}
	} else { // If there are no images left to load, start the game
		startGame();
	}
}

function srcToName(src) { // Convert the source of the image to a name that can more easily be utilized
	var start = src.lastIndexOf("/") + 1;
	var end = src.indexOf(".");
	var name = src.substring(start, end);
	return name;
}

function countLoaded() { // Change the number of images that need to be loaded
	imagesToLoad--;
	if (imagesToLoad === 0) {
		startGame();
	}
}