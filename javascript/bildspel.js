// JavaScript Document

var imageviewer = ["../pics/3D-3.png", "../pics/MeAndMyself.png", "../pics/PopArt.png", "../pics/TopGame.png"];
var change = document.getElementById("change");
var counter = 0;

function picslide() {
	setInterval(function() {
		display();
		
		if(counter < imageviewer.length - 1) {
			counter++;
		}
		else {
			counter = 0;
		}
	}, 5000);
}

function display() {
	change.src = imageviewer[counter];
};

window.onLoad = picslide();

console.log(counter)