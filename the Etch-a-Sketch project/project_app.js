document.addEventListener("DOMContentLoaded", function (){
  
    creatboard(24)

    let btn_pop_up = document.querySelector('#pop_up')
    btn_pop_up.addEventListener ("click", function() {
        let size=getsize();
        creatboard(size);
    })
    console.log("hi")
})

function creatboard (size){
    let board = document.querySelector(".board");

    board.style.GridTemplateColumns = "repeat(16, 1fr)";
    board.style.GridTemplateRows = "repeat(16, 1fr)";

    let numdivs = size*size;
    for (i=0;i<numdivs;i++){
        let div = document.createElement('div');
        div.addEventListener("mouseover", function() {
            div.backgroundcolor= "Black";
        })
        board.insertAdjacentElement('beforeend', div);
    }
}

function getsize() {
    let  input = prompt("What do you want for the size of the board ?");
    let message = document.querySelector("message");
    if (input == ""){
        message.innerHTML = "Please provide a number." ;

    }
    else if (input<0 || input> 100) {
        message.innerHTML = "Please provide a number between 1 and 100." ;

    }
    else {
        message.innerHTML = "Congratulations, now you can play!" ;
        return input;
    }
}