var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtom = document.querySelectorAll(".mode");

init();

function init()
{
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons()
{
	//mode event listeners
	for(var i = 0; i < modeButtom.length; i++)
	{
		modeButtom[i].addEventListener("click", function()
		{
			modeButtom[0].classList.remove("selected");
			modeButtom[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
	});
	}
}

function setUpSquares()
{
	for (var i = 0; i < squares.length; i++) {
	//add event listener
	squares[i].addEventListener("click", function(){
	//getting color from the clicked square
	var clickedColor = this.style.backgroundColor;
	if(clickedColor === pickedColor)
	{
		message.textContent = "Correct";
		resetButton.textContent = "Play Again ?"
		changeColor(clickedColor);
		h1.style.backgroundColor = pickedColor;
	}
	else{
		this.style.backgroundColor = "#232323";
		message.textContent = "Try Again";
	}

	});
	}
}

function reset()
{
	colors = generateRandomColor(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    message.textContent = "";
    for(var i = 0 ; i < squares.length; i++)
    {
    	if(colors[i])
    	{
    		squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}

    	else
    	{
    		squares[i].style.display = "none";
    	}
    }

    h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColor(color){
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
	for(var i = 0; i < num; i++)
	{
	arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}