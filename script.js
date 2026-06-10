let user = 0;
let comp = 0;
let imgs = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
let reset = document.querySelector("#reset-btn");

const choices = ["rock", "paper", "scissor"];


function showwinner(compchoice, userchoice) {
    if (compchoice === "rock") {
        if (userchoice === "paper") {
            user++;
            msg.innerText = "You Win! 🎉";
              msg.style.backgroundColor = "green";
        }
        else {
            comp++;
            msg.innerText = "Computer Wins! 😔";
             msg.style.backgroundColor = "red";
        }

    }
    else if (compchoice === "paper") {
        if (userchoice === "rock") {
            comp++;
            msg.innerText = "Computer Wins! 😔";
             msg.style.backgroundColor = "red";
        }
        else {
            user++;
            msg.innerText = "You Win! 🎉";
              msg.style.backgroundColor = "green";
        }

    }
    else {
        if (userchoice === "rock") {
            user++;
            msg.innerText = "You Win! 🎉";
              msg.style.backgroundColor = "green";
        }
        else {
            comp++;
            msg.innerText = "Computer Wins! 😔";
             msg.style.backgroundColor = "red";
        }
    }
    userScore.innerText = user;
    compScore.innerText = comp


}

function draw() {
    msg.innerText = "It's a Tie! Try Again.";
}


imgs.forEach((choice) => {
    choice.addEventListener("click", () => {

        let randomindex = Math.floor(Math.random() * 3);
        let compchoice = choices[randomindex];
        let userchoice = choice.getAttribute("id");
        if (userchoice == compchoice) {
            draw();
        }
        else {
            showwinner(compchoice, userchoice);
        }

    });
}
);
reset.addEventListener("click",() => {
user =0; 
comp =0;
userScore.innerText = user;
compScore.innerText = user;
msg.innerText = " play your move";
});
