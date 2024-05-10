let userScore=0;
let computerScore=0;
let showUser=document.querySelector(".showUser");
let showComp=document.querySelector(".showComp");
const choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");

let userScores=document.querySelector("#user-score");
let compScores=document.querySelector("#computer-score");



const drawGame=()=>{
	msg.innerText="Game was Draw";
}

const showWinner=(userWin)=>{
	if(userWin){
		msg.innerText="Congratulations.You Won!";
		userScore++;
		userScores.innerText=userScore;
	}
	else{
		msg.innerText="Oops.You loose";
		computerScore++;
		compScores.innerText=computerScore;
	}
}

const genCompChoice=()=>{
	let options=["rock","paper","scissors"];
	const randomIdx=Math.floor(Math.random()*3);
	return options[randomIdx];
}

const playGame=(userChoice)=>{
	const compChoice=genCompChoice();
	showUser.classList.remove("hide");
	showComp.classList.remove("hide");
	showUser.innerText=userChoice;
	showComp.innerText=compChoice;

	if(userChoice===compChoice){
		drawGame(); //if game was draw
	}
	else{
		let userWin=true;
		if(userChoice==="rock"){
			//paper,scissor
			userWin=compChoice==="paper"?false: true;
		}
		else if(userChoice==="paper"){
			userWin=compChoice==="rock"?true:false;
		}
		else{
			userWin=compChoice==="scissors"?false:true;
		}
		showWinner(userWin);
	}
}

choices.forEach((choice)=>{
	choice.addEventListener("click",()=>{
		const userChoice=choice.getAttribute("id");
		playGame(userChoice);
	});
});

