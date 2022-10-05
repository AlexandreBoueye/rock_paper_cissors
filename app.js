let resertBTn = document.getElementById("reset");
let scoreplayer = document.getElementById("score_player");
let scorecomputer = document.getElementById("score_computer");
let btn_player=[...document.getElementsByClassName("btn_player")];
let crock=document.getElementById("orock");
let cpaper=document.getElementById("opaper");
let cscissors=document.getElementById("oscissors");
let message=document.getElementById("message");
let nextBtn=document.getElementById("next");

const play = (e) {
    let choice = e.target.closest(".btn_player");

    btn_player.forEach((btn) {
        btn.classList.add("desactivated");
        bnt.removeEventListener("click",play);
    })
    
    choice.classList.remove("descativated");
    choice.classList.add("active");

    let gamerchoice = choice.id;

    let computerchoise= makechoisecomputer();

    verifywiner(gamerchoice,computerchoise);

    nextBtn.style.visibility="visible";
};

const rock="rock";
const paper="paper";
const scissors="scissors";

const makechoisecomputer = () {
    let randomnumb = Math.floor(Math.random()*3);
    switch(randomnumb){
        case 0 : 
        crock.classList.add("active");
        return rock;
        case 1 : 
        cpaper.classList.add("active");
        return paper;
        default :
        cscissors.classList.add("active");
        return scissors;

    }
};

const verifywiner = (gamerchoice,computerchoise) {
if(gamerchoice==computerchoise){
    message.textContent = "Draw !";
    return;

    if (gamerchoice == rock){
        if (computerchoise == paper){
            return computerwin();
        } else if (computerchoise==scissors){
            return playerwin();
        }
    }

    if (gamerchoice == paper){
        if (computerchoise == scissors){
            return computerwin();
        } else if (computerchoise==rock){
            return playerwin();
        }
    }

    if (gamerchoice == scissors){
        if (computerchoise == rock){
            return computerwin();
        } else if (computerchoise==paper){
            return playerwin();
        }
    }
}
};


const computerwin = () {
    message.textContent = "Computer has won...";
    computerscore.textContent++;
};
const playerwin = () {
    message.textContent = "Player has won :)";
    computerscore.textContent++;
};
btn_player.forEach(btn.addEventListener("click",play))