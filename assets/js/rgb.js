var numSquares = 6
var colors = generateRandomColor(numSquares);
var h1 = document.querySelector("h1")
var squares = document.querySelectorAll(".squares");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var resetB = document.querySelector("#reset");
var modeB = document.querySelectorAll(".modeB")


for(var i = 0; i < modeB.length; i++){
	modeB[i].addEventListener("click", function(){
		modeB[0].classList.remove("selected");
		modeB[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numSquares = 3;
		} else {
			numSquares = 6;
		}

		reset();
	});
}

function reset() {
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetB.textContent = "New Colors";
	message.textContent = "";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"
			squares[i].style.background = colors[i];

		}else{
			squares[i].style.display = "none";
		}
	
}
	h1.style.background = "steelblue"
	message.textContent = " "

}


// easybtn.addEventListener("click", function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numSquares = 3
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.background = "steelblue"
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]) {
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.background = "none"
// 		} 
// 	}
// });


// hardbtn.addEventListener("click", function(){
// 	hardbtn.classList.add("selected");
// 	easybtn.classList.remove("selected");
// 	numSquares = 6
// 	colors = generateRandomColor(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	h1.style.background = "steelblue"
// 	for(var i = 0; i < squares.length; i++){
// 	squares[i].style.background = colors[i];
// 	squares[i].style.background = "block"
	
// 	}
// });


resetB.addEventListener("click", function(){
	reset()
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			message.textContent = "Correct!"
			changeColor(clickedColor);
			h1.style.background = clickedColor
			resetB.textContent = "Play Again?"

		} else {
			message.textContent = "Try Again"
			this.style.background = "#232323"
		}
	});
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
} 

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = []

	for(var i = 0; i < num; i++){
		arr.push(randomColor());

	}
	return arr; 
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}