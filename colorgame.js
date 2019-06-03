var numberofsquares = 6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".squares");
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var difficultylevelbtns = document.querySelectorAll(".difficultylevelbtns");

init();

function init(){
     setupdifficultylevelbtns();
     setupsquares();
     reset();
    }   


    function setupdifficultylevelbtns(){
    	difficultylevelbtns[1].classList.add("selected");
	    for(var i = 0; i < difficultylevelbtns.length; i++){
			difficultylevelbtns[i].addEventListener("click", function(){

				for(var i = 0; i < difficultylevelbtns.length; i++){
					difficultylevelbtns[i].classList.remove("selected");
				}

				this.classList.add("selected");
			    if(this.textContent === "Easy")
			    {
			    	numberofsquares = 3;
			    }
			    else if(this.textContent === "Medium"){
			    	numberofsquares = 6;
			    }

			    else if(this.textContent === "Hard"){
			    	numberofsquares = 9;
			    }

			    else{
			    	numberofsquares = 12;
			    }
				    reset();
			});
	    }
    }
    

    function setupsquares(){
    	for(var i = 0; i < squares.length; i++)
{
	
	squares[i].addEventListener("click", function()
		{
			var clickedcolor = this.style.backgroundColor;
			if(clickedcolor === pickedcolor)
			{
				messagedisplay.textContent = "Correct";
				resetbutton.textContent = "Play Again?";
				changecolors(clickedcolor);
				h1.style.background = clickedcolor;
				console.log("You picked the correct color!")
			}
			else{
				this.style.background = "#232323";
				messagedisplay.textContent = "Try Again";
				console.log("You picked the wrong color!")

			}
			
		});
}
    }


	function reset(){
		colors = generateRandomColors(numberofsquares);
		console.log({colors})
	    pickedcolor = pickcolor();
	    console.log({pickedcolor})
	    colordisplay.textContent = pickedcolor;
	    resetbutton.textContent = "New Colors";
	    messagedisplay.textContent = "";
	    

	for(var i = 0; i <squares.length; i++)
	{
		if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}
	else {
		squares[i].style.display = "none";
	}
	}
	h1.style.background = "steelblue";
	}
	


resetbutton.addEventListener("click", function()
{
	reset();
});


function changecolors(color){
for(var i = 0 ; i < squares.length; i++)
	squares[i].style.background = color;
}

function pickcolor(){
	console.log("colors.length = ",colors.length)
	var random = Math.floor(Math.random() * colors.length);
	console.log("random index = ",random)
	console.log("picked color = ",colors[random])
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	console.log({num})
	for(var i = 0; i < num ; i ++)
	{
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