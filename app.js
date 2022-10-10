let resertBTn = document.getElementById("reset");
let scoreplayer = document.getElementById("score_player");
let scorecomputer = document.getElementById("score_computer");
let btn_player=[...document.getElementsByClassName("btn_player")];
let crock=document.getElementById("crock");
let cpaper=document.getElementById("cpaper");
let cscissors=document.getElementById("cscissors");
let message=document.getElementById("message");
let nextBtn=document.getElementById("next");

const play = (e) => {
    for(i=0; i<5; i++);
    let choice = e.target.closest(".btn_player");

    btn_player.forEach((btn) => {
        btn.classList.add("desactivated");
        bnt.removeEventListener("click",play);
    });
    
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

const makechoisecomputer = () => {
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

const verifywiner = (gamerchoice,computerchoise) => {
if(gamerchoice==computerchoise){
    message.textContent = "Draw !";
    return;
    }
    if (gamerchoice == rock){
        if (computerchoise == paper){
            return computerwin();
        } else if (computerchoise==cscissors){
            return playerwin();
        }
    }

    if (gamerchoice == paper){
        if (computerchoise == cscissors){
            return computerwin();
        } else if (computerchoise==crock){
            return playerwin();
        }
    }

    if (gamerchoice == scissors){
        if (computerchoise == crock){
            return computerwin();
        } else if (computerchoise==cpaper){
            return playerwin();
        }
    }

};


const computerwin = () => {
    message.textContent = "Computer has won...";
    computerscore.textContent++;
};
const playerwin = ()=> {
    message.textContent = "Player has won :)";
    computerscore.textContent++;
};

const newgame = ()  => {
    btn_player.forEach((btn) => {
        btn.classList.remove('desactivated');
        btn.classList.remove('active');

        btn_player.forEach(btn.addEventListener("click",play));
    });
    nextBtn.style.visibility="hidden";

    crock.classList.remove('active');
    cpaper.classList.remove('active');
    cscissors.classList.remove('active');

    message.textContent=" Your turn ! ";
};

nextBtn.addEventListener('click',newgame);

btn_player.forEach((btn)=> btn.addEventListener("click",newgame));

resertBTn.addEventListener("click",()=> {
    scoreplayer.textContent=0;
    scorecomputer.textContent=0;

    newgame();
});


