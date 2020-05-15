var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.getElementById("easyBtn");
var hardbtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click",function(){
    easyBtn.classList.add("selected");
    hardbtn.classList.remove("selected");

    numSquares=3;
    //generate new colors
    colors=generateRandomColors(numSquares);
    //pick a random color from array
    pickedColor=pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        } else{
            squares[i].style.display="none";
        }
    }

});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    
    numSquares=6;
    //generate new colors
    colors=generateRandomColors(numSquares);
    //pick a random color from array
    pickedColor=pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block";
    }
});

resetButton.addEventListener("click",function(){
    //generate new colors
    colors=generateRandomColors(numSquares);
    //pick a random color from array
    pickedColor=pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of squares
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue";
    resetButton.textContent="New colors";
    messageDisplay.textContent="";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
            messageDisplay.textContent="correct";
            resetButton.textContent="Play Again?"
            //for changing color of boxes
            ChangeColors(pickedColor);
        
        } else {
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="try again";
		}
	});
}

//for changing colors of boxes after correct answers
function ChangeColors(color){
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
    h1.style.backgroundColor=color;
}

//for selecting a color from the array colors
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

//for generating random colors
function generateRandomColors(num){
    //make an array
    var arr=[];
    //for looping num times
    for(var i=0;i<num;i++){
        //get random color and push into array
         arr.push(randomColor());
    }
    return arr;
}

function randomColor(){
    //generate a red from 0-255
    var r = Math.floor(Math.random()*256);
    //generate a green from 0-255
    var g = Math.floor(Math.random()*256);
    //generate a blue from 0-255
    var b = Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}