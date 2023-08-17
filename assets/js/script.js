var startButton = document.getElementById("start-quiz-button");
var questionOne = {
    text: "What kind of language is JavaScript?",
    answer: "High-Level Language",
}

console.log(startButton); 

function startQuiz(){
    document.getElementById("quiz-intro").style.display = "none";

}

startButton.addEventListener("click", startQuiz);
// timer has to start as well


