// Declaring the questions! These are the objects that the questions and answers will be pulled from. 

var questions = [

    {
    quest: "What kind of language is JavaScript?",
    options: ["High-Level Language", "Low-Level Language", "Hypertext Language", "Foreign Language"],
    ans: "High-Level Language"
    },

    {
    quest: "What does event.stopPropagation prevent?",
    options: ["Event Gurgling", "Dehydration", "Event Bubbling", "DOM Traversal"],
    ans: "Event Bubbling"
    },

    {
    quest: "In a browser, what is the global object?",
    options: ["Object-This", "Earth", "The OS Drive", "The Window"],
    ans: "The Window"
    },

    {
    quest: "What is the name of the indexing convention used by arrays?",
    options: ["Periodical Indexing", "Legal Indexing", "Metadata indexing", "Zero indexing"],
    ans: "Zero indexing"
    },

    {
    quest: "What does API stand for?",
    options: ["Applicable Program Index", "Application Programming Interface", "Applied Pressure Indicator", "Aftermath Pomegranate Incineration"],
    ans: "Application Programming Interface" 
    },

    {
    quest: "History Question! When was JavaScript released?",
    options: ["1 AD", "1989", "2000", "1995"],
    ans: "1995"  
    }

]
   
// After establishing the question bank, I want to grab all necessary DOM elements for the below functions. 

var startButton = document.getElementById("start-quiz-btn");
var timerE1 = document.querySelector("#timer");
var questionsE1 = document.querySelector("#questions-page");
var submitBtn = document.querySelector("#submitBtn");
var nameE1 = document.querySelector("#name");
var responseE1 = document.querySelector("#response");








// Intro Page and Quiz's initial state. Quiz's length based on the amount of questions present. 

var time = questions.length * 15;
var timerId;
var currentQuestionIndex = 0;



function startQuiz(){
    // timerId = setInterval(tickTock, 1000);
    // timerE1.textContent = time;
    document.getElementById("intro").style.display = "none";
    document.getElementById("questions-page").style.display = "flex";

}

startButton.addEventListener("click", startQuiz);


function tickTock() {
    time--;
    timerE1.textContent = time;
    if (time <= 0) {
            endQuiz()
    }
}
