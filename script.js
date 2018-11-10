var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

var style = getComputedStyle(body);
var reg = /linear-gradient\(([a-z ,])+\)/
css.textContent = reg.exec(style.background)[0];

function setGradient() {
	body.style.background = 
			"linear-gradient(to right," 
			+ color1.value 
			+ "," 
			+ color2.value 
			+")";
	css.textContent = body.style.background + ";";
}

function generateRandomColors() {
	var red = Math.floor((Math.random() * 256));
	var green = Math.floor((Math.random() * 256));
	var blue = Math.floor((Math.random() * 256));
	var red1 = Math.floor((Math.random() * 256));
	var green1 = Math.floor((Math.random() * 256));
	var blue1 = Math.floor((Math.random() * 256));
	body.style.background = 
			"linear-gradient(to right, rgb("
			+ red + "," + green + "," + blue + "),"
			+ " rgb(" 
			+ red1 + "," + green1 + "," + blue1 + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateRandomColors);