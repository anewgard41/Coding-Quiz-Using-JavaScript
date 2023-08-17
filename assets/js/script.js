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
    options: ["Periodical Indexing", "Legal Indexing", "Metadata indexing", "Zero-indexing"],
    ans: "Zero-indexing"
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
   




var startButton = document.getElementById("start-quiz-button");

function startQuiz(){
    document.getElementById("quiz-intro").style.display = "none";


}

startButton.addEventListener("click", startQuiz);
// timer has to start as well


