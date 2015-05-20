
for (i=0; i<3; i++){
	var div = document.createElement("div")
	// div.style.width= "28%";
	// div.style.paddingBottom= "10%";
	div.style.backgroundColor= "red";
	div.style.border = "2px solid black";
	div.style.float = "left";
	div.style.borderRadius = "15px"

	if (i===0){
		// div.innerHTML = "Rock";
		div.id= "0";
		document.body.appendChild(div);
		var imgRock = document.createElement("img");
		imgRock.src = "./Images/Rock.jpg"
		imgRock.style.borderRadius= "15px"
		div.appendChild(imgRock);
	} else if (i===1){
		// div.innerHTML = "Paper";
		div.id= "1";
		document.body.appendChild(div);
		var imgRock = document.createElement("img");
		imgRock.src = "./Images/Paper.jpg"
		imgRock.style.borderRadius= "15px"
		div.appendChild(imgRock);
	} else if (i===2){
		// div.innerHTML = "Scissors"; 
		div.id= "2";
		document.body.appendChild(div);
		var imgRock = document.createElement("img");
		imgRock.src = "./Images/Scissors.jpg"
		imgRock.style.borderRadius= "15px"
		div.appendChild(imgRock);
	}
	div.addEventListener("click", function(){
		compare(this)
	})
}

var computerScore = 0;
var playerScore = 0;

var compare = function(choice){
	var rand = Math.floor(Math.random(1,3)*3);
	console.log("computer " + rand);
	console.log("Us " + choice.id);
	if (rand=== parseInt(choice.id)){
		console.log("Tie");
		tracking();
	} else if (rand===0){ //computer has rock 
		if (parseInt(choice.id)=== 1){
			console.log("Win")
			playerScore+=1;
			tracking();
		}
		else if (parseInt(choice.id)=== 2){
			console.log("Lose");
			computerScore+=1;
			tracking();
		} 
	} else if (rand ===1) {//computer has paper
		if (parseInt(choice.id)=== 0){
			console.log("Lose")
			computerScore+=1;
			tracking();
		}
		else if (parseInt(choice.id)=== 2){
			console.log("Win")
			playerScore+=1;
			tracking();
		}
	}  else {//computer has scissors
		if (parseInt(choice.id)=== 0){
			console.log("Win")
			playerScore+=1;
			tracking();
		}
		else if (parseInt(choice.id)=== 1){
			console.log("Lose")
			computerScore+=1;
			tracking();
		}
	}	
}

var score = document.createElement("div");
function scoreBoard(){
	score.style.width = "10%";
	score.style.backgroundColor= "blue";
	score.style.border= "2px solid black";
	score.style.float = "right";
	score.style.paddingBottom="5%";
	score.style.borderRadius= "15px"
	document.body.appendChild(score);
};
scoreBoard();

function tracking(){
	score.innerHTML = "Computer Score: " + parseInt(computerScore) 
	score.innerHTML += " " + " \t User Score: " + parseInt(playerScore);
 };







