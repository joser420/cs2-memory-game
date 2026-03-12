console.log("Script started");
let guesses = 0;

let firstCardId = "";

let secondCardId = "";

function flipCard(CardId){
    console.log("click")
    let card =document.getElementById(CardId);

    card.style.color = "white";

    card.style.backgroundColor = "cornflowerblue";
    if (firstCardId == ""){
        firstCardId = CardId;
        console.log(firstCardId);
    }

    else {
        secondCardId = CardId;
        guesses = guesses + 1;
        console.log(secondCardId);
        console.log("guesses = " + guesses);
        let guessDisplay = document.getElementById("guesses");
        guessDisplay.innerText = "Guesses: " + guesses;

    }
}

function checkForMatch(){
    let card1 = document.getElementById(firstCardId);
    let card2 = document.getElementById(secondCardId)
    if (card1.innerText == card2.innerText){
        card1.style.backgroundColor = "green";
        card2.style.backgroundColor = "green";
    }

    else {
        
    }

}