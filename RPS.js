function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function playRock(){
    var userInputRock = document.getElementById('userInputRock').value;
    var compInput = getRandomInt(3);

    if(userInputRock.clicked = 'true'){
        if(compInput == 0) {
            alert("You chose Rock, the computer chose Rock. It is a tie, please try again!");
        } else if (compInput == 1){
            alert("You chose Rock, the computer chose Paper. You lose!");
        } else if (compInput == 2){
            alert("You chose Rock, the computer chose Scissor. You win!");
        } 
    } else {
        alert("Unexpected Error!");
    }
}
function playPaper(){
    var userInputPaper = document.getElementById('userInputPaper').value;
    var compInput = getRandomInt(3);

    if(userInputPaper.clicked = 'true'){
        if(compInput == 0) {
            alert("You chose Paper, the computer chose Rock. You win!");
        } else if (compInput == 1){
            alert("You chose Paper, the computer chose Paper. It is a tie, please try again!");
        } else if (compInput == 2){
            alert("You chose Paper, the computer chose Scissor. You lose!");
        } 
    } else {
        alert("Unexpected Error!");
    }
}
function playScissor(){
    var userInputScissor = document.getElementById('userInputScissor').value;
    var compInput = getRandomInt(3);

    if(userInputScissor.clicked = 'true'){
        if(compInput == 0) {
            alert("You chose Scissor, the computer chose Rock. You lose!");
        } else if (compInput == 1){
            alert("You chose Scissor, the computer chose Paper. You win!");
        } else if (compInput == 2){
            alert("You chose Scissor, the computer chose Scissor. It is a tie, please try again!");
        }
    } else {
        alert("Unexpected Error!");
    }
}